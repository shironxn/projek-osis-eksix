import dataTPAS from "@/types/tpas.type";
import axios from "axios";

export async function validateToken(token: string) {
  try {
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        secret: process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY,
        response: token,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}

export function validateDataTPAS(data: dataTPAS): string[] {
  const errors: string[] = [];

  if (!data.message || data.message.trim() === "") {
    errors.push("Message is Required");
  }

  return errors;
}
