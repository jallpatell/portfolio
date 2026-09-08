import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      
      // 1. Save to database as a backup
      await storage.createContact(input);

      // 2. Push to email using Nodemailer
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: "11jal.edu@gmail.com",
          subject: `Portfolio Contact from ${input.name}`,
          text: `Name: ${input.name}\nEmail: ${input.email}\nMessage:\n${input.message}`,
          html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${input.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${input.email}">${input.email}</a></p>
            <p><strong>Message:</strong></p>
            <p>${input.message.replace(/\n/g, '<br>')}</p>
          `,
        });
      } else {
        console.warn("Nodemailer: SMTP_USER or SMTP_PASS is missing in .env. Email was not sent.");
      }

      res.status(201).json({ success: true });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: err.errors[0].message });
      }
      console.error("Failed to process contact submission:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  return httpServer;
}
