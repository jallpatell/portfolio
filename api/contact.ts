import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';

const insertContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const input = insertContactSchema.parse(req.body);
    console.log('Contact submission:', input);
    return res.status(201).json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ message: err.errors[0].message });
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
