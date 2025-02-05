"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SimpleLayout from '@/layout/components/SimpleLayout'
import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});


const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormInputs>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: FormInputs) => {
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        { ...data },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );
      setSuccess(true);
      setError(false);
      reset(); 
    } catch {
      setError(true);
    }
  };

  return (
    <>
    <div className="fixed inset-0 flex md:px-8 lg:px-20">
      <div className="flex w-full">
        <div className="w-full bg-white ring-1 ring-zinc-100" />
      </div>
    </div>

    <SimpleLayout
      title="Contactez-nous"
      intro="[Description]..."
    >
      {success && <p className="text-green-500">✅ Email sent successfully!</p>}
      {error && <p className="text-red-500">❌ Failed to send email. Try again.</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-xl mx-auto">
        <div>
          <label className="block font-medium">Nom</label>
          <input
            type="text"
            {...register("name")}
            className="w-full p-2 border rounded"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full p-2 border rounded"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block font-medium">Message</label>
          <textarea
            {...register("message")}
            className="w-full p-2 border rounded h-32"
          />
          {errors.message && <p className="text-red-500">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer"}
        </button>
      </form>

    </SimpleLayout>
  </>
  );
};

export default ContactForm;
