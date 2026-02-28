import { type InsertContact, type ContactMessage } from "@shared/schema";

export interface IStorage {
  createContact(msg: InsertContact): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private messages: Map<number, ContactMessage>;
  private currentId: number;

  constructor() {
    this.messages = new Map();
    this.currentId = 1;
  }

  async createContact(insertMsg: InsertContact): Promise<ContactMessage> {
    const id = this.currentId++;
    const msg: ContactMessage = { ...insertMsg, id, createdAt: new Date() };
    this.messages.set(id, msg);
    return msg;
  }
}

export const storage = new MemStorage();
