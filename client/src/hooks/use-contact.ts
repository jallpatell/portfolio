import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import type { InsertContact } from "@shared/schema";

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: InsertContact) => {
      const validated = api.contact.submit.input.parse(data);
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to submit contact form");
      }
      
      return api.contact.submit.responses[201].parse(await res.json());
    }
  });
}
