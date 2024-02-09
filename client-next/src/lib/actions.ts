"use server";
import React from "react";
import { Resend } from "resend";
import { validateString } from "./utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) message = error.message;
  else if (error && typeof error === "object" && "message" in error)
    message = String(error.message);
  else if (typeof error === "string") message = error;
  else message = "Something error";

  return message;
};

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500))
    return { error: "Invalid sender email" };
  if (!validateString(message, 5000)) return { error: "Invalid message" };

  try {
    resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "lucasescudero5629@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      // text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
      // react: <ContactFormEmail message={message as string} senderEmail={senderEmail} />
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};
