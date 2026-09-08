import { Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@/lib/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const submitMutation = useSubmitContact();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: InsertContact) => {
    submitMutation.mutate(data, {
      onSuccess: () => {
        toast({ title: "Message sent", description: "Thanks for reaching out! I'll get back to you soon." });
        form.reset();
      },
      onError: (error) => {
        toast({ title: "Failed to send", description: error.message, variant: "destructive" });
      },
    });
  };

  return (
    <section
      id="contact"
      className="py-32 relative"
      style={{ background: "var(--bg-page)" }}
    >
      {/* Crosshair marks */}
      <span className="absolute top-16 left-[15%] crosshair hidden lg:block" />
      <span className="absolute bottom-16 right-[15%] crosshair hidden lg:block" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">

        <h2 className="section-headline mb-4">Let's work together.</h2>

        <p className="body-serif text-[1rem] mb-12 max-w-lg mx-auto">
          Whether you have a project, a role, or just want to say hello — I'd love to hear from you.
        </p>

        {/* Form */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              label="Name"
              placeholder="Satoshi Nakamoto"
              id="contact-name"
              error={form.formState.errors.name?.message}
              {...form.register("name")}
            />
            <FormField
              label="Email"
              type="email"
              placeholder="satoshi@exe.com"
              id="contact-email"
              error={form.formState.errors.email?.message}
              {...form.register("email")}
            />
          </div>
          <FormField
            label="Message"
            placeholder="Tell me about your project or idea..."
            id="contact-message"
            textarea
            rows={5}
            error={form.formState.errors.message?.message}
            {...form.register("message")}
          />
          <button type="submit" disabled={submitMutation.isPending} className="btn-primary w-full justify-center py-3">
            {submitMutation.isPending
              ? <Loader2 className="w-3.5 h-3.5 animate-spin" />
              : <Send className="w-3.5 h-3.5" />
            }
            {submitMutation.isPending ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  textarea?: boolean;
  rows?: number;
  id: string;
}

const FormField = ({ label, error, textarea, rows, id, ...props }: FormFieldProps) => {
  const fieldStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--bg-input)",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    padding: "0.625rem 0.875rem",
    fontSize: "0.875rem",
    color: "var(--ink)",
    fontFamily: "var(--font-sans)",
    outline: "none",
    transition: "border-color 0.15s ease",
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        style={{ fontFamily: "var(--font-mono)", color: "var(--ink-4)", fontSize: "0.6875rem" }}
        className="uppercase tracking-wide"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={rows}
          style={{ ...fieldStyle, resize: "none" }}
          placeholder={props.placeholder as string}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          style={fieldStyle}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error && (
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.625rem", color: "#ef4444" }}>{error}</p>
      )}
    </div>
  );
};
