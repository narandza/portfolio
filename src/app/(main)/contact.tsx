import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Must be 2 or more characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string(),
});

export const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    toast.info("Sending...");
    const formData = new FormData();
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB_3_FORMS_PUBLIC_KEY!
    );
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Form Submitted Successfully");

        form.reset();
      } else {
        toast.error("Error submitting the form");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20" id="contact">
      <h4 className="text-center mb-2 text-lg">Connect with me</h4>
      <h2 className="text-center text-5xl">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        I&apos;d love to hear from you! If you have any questions, comments, or
        feedback, please use the form below
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-auto lg:grid-cols-2 gap-6 mt-10 mb-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormDescription>Enter your name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@mail.com" {...field} />
                  </FormControl>
                  <FormDescription>Enter your email</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Hello..." {...field} />
                </FormControl>
                <FormDescription>Enter your message</FormDescription>
              </FormItem>
            )}
          />
          {/* TODO: Replace all buttons with btn outline */}
          <Button
            variant="outline"
            className="flex items-center justify-between gap-2 rounded-full mx-auto py-3 px-8"
          >
            Submit
            <ArrowRight className="size-4" />
          </Button>
        </form>
      </Form>
    </div>
  );
};
