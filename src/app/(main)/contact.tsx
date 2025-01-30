import { z } from "zod";
import { toast } from "sonner";
import { motion } from "motion/react";
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
import {
  CONTENT_DIV_DELAY_TIME,
  CONTENT_DIV_DURATION_TIME,
  DESCRIPTION_DELAY_TIME,
  DESCRIPTION_DURATION_TIME,
  PARENT_DIV_DURATION_TIME,
  PRIMARY_HEADING_DELAY_TIME,
  PRIMARY_HEADING_DURATION_TIME,
  SECONDARY_HEADING_DELAY_TIME,
  SECONDARY_HEADING_DURATION_TIME,
  X_AXIS_INITIAL_POSITION,
  Y_AXIS_INITIAL_POSITION,
} from "@/constants/animations";

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
    <motion.div
      className="w-full px-[12%] py-10 scroll-mt-20"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: PARENT_DIV_DURATION_TIME }}
    >
      <motion.h4
        className="text-center mb-2 text-lg"
        initial={{ opacity: 0, y: Y_AXIS_INITIAL_POSITION }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: SECONDARY_HEADING_DURATION_TIME,
          delay: SECONDARY_HEADING_DELAY_TIME,
        }}
      >
        Connect with me
      </motion.h4>
      <motion.h2
        className="text-center text-5xl"
        initial={{ opacity: 0, y: Y_AXIS_INITIAL_POSITION }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: PRIMARY_HEADING_DURATION_TIME,
          delay: PRIMARY_HEADING_DELAY_TIME,
        }}
      >
        Get in touch
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: DESCRIPTION_DURATION_TIME,
          delay: DESCRIPTION_DELAY_TIME,
        }}
      >
        I&apos;d love to hear from you! If you have any questions, comments, or
        feedback, please use the form below
      </motion.p>

      <Form {...form}>
        <motion.form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: CONTENT_DIV_DURATION_TIME,
            delay: CONTENT_DIV_DELAY_TIME,
          }}
        >
          <div className="grid grid-cols-auto lg:grid-cols-2 gap-6 mt-10 mb-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: CONTENT_DIV_DURATION_TIME,
                    delay: 1.1,
                  }}
                >
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormDescription>Enter your name</FormDescription>
                    <FormMessage />
                  </FormItem>
                </motion.div>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <motion.div
                  initial={{ opacity: 0, x: X_AXIS_INITIAL_POSITION }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: CONTENT_DIV_DURATION_TIME,
                    delay: 1.1,
                  }}
                >
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@mail.com" {...field} />
                    </FormControl>
                    <FormDescription>Enter your email</FormDescription>
                    <FormMessage />
                  </FormItem>
                </motion.div>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Hello..." {...field} />
                  </FormControl>
                  <FormDescription>Enter your message</FormDescription>
                </FormItem>
              </motion.div>
            )}
          />
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="outline"
              className="w-max flex items-center justify-center gap-2 text-muted-foreground rounded-full py-6 px-10 mx-auto my-20 hover:bg-muted"
            >
              Submit
              <ArrowRight className="size-4" />
            </Button>
          </motion.div>
        </motion.form>
      </Form>
    </motion.div>
  );
};
