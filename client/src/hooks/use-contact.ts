import { useMutation } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@/lib/schema";

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: InsertContact) => {
      const validated = insertContactSchema.parse(data);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to submit contact form");
      }
      
      return res.json();
    }
  });
}
