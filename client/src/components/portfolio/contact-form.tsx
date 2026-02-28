import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";

export function ContactForm() {
  const { toast } = useToast();
  const submitMutation = useSubmitContact();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertContact) => {
    submitMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message sent",
          description: "Thanks for reaching out! I'll get back to you soon.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "Failed to send",
          description: error.message,
          variant: "destructive"
        });
      }
    });
  };

  return (
    <div className="p-5 md:p-6">
      <p className="text-[13px] text-white/50 tracking-tight mb-6">
        Whether you have a question, a project idea, or just want to say hi, my inbox is open.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs text-white/60">Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Satoshi Nakamoto" 
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl focus-visible:ring-primary/50 focus-visible:border-primary/50" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-destructive" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs text-white/60">Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="satoshi@exe.com" 
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl focus-visible:ring-primary/50 focus-visible:border-primary/50" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-destructive" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-white/60">Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl min-h-[120px] resize-none focus-visible:ring-primary/50 focus-visible:border-primary/50" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-xs text-destructive" />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={submitMutation.isPending}
            className="w-full bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary text-primary-foreground font-semibold rounded-xl h-11 transition-all duration-300 shadow-[0_0_15px_rgba(48,209,88,0.2)] hover:shadow-[0_0_20px_rgba(48,209,88,0.4)]"
          >
            {submitMutation.isPending ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Send className="w-4 h-4 mr-2" />
            )}
            {submitMutation.isPending ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
