import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Must be 2 or more characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string(),
});

export const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20" id="contact">
      <h4 className="text-center mb-2 text-lg">Connect with me</h4>
      <h2 className="text-center text-5xl">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        I&apos;d love to hear from you! If you have any questions, comments, or
        feedback, please use the form below
      </p>
    </div>
  );
};
