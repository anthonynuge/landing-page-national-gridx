"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContactForm() {
  return (
    <section className="w-full py-16 min-h-[80vh] max-w-7xl mx-auto space-y-4">
      <h2 className="text-4xl font-bold mb-2">Contact Us</h2>
      <p>Feel free to contact our team via the form below</p>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-[35rem]">
        {/* Left Side: Image */}
        <div className="relative h-full w-full">
          <Image
            src="/contact/2.jpg" // Replace with your image
            alt="Contact"
            fill
            className="rounded-xl object-cover"
            priority
          />
        </div>

        {/* Right Side: Form */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200 space-y-6 h-full">
          <div>
            <h2 className="text-2xl font-semibold mb-1">Send us a message!</h2>
            <p className="text-sm text-gray-500">
              Contact us about energy solutions or service questions. We’re here
              to help — let’s build a smarter future together.
            </p>
          </div>

          <form className="space-y-4 flex flex-col">
            <Input type="email" placeholder="Email Address" required />
            <Input type="text" placeholder="Business Name" required />
            <div className="flex gap-4">
              <Input type="text" placeholder="First Name" required />
              <Input type="text" placeholder="Last Name" required />
            </div>
            <Textarea
              placeholder="Write your message..."
              rows={6}
              required
              className="h-[10rem]"
            />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
