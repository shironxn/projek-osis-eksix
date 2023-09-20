import dataTPAS from "@/types/tpas.type";

export function validateDataTPAS(data: dataTPAS): string[] {
  const errors: string[] = [];

  if (!data.message || data.message.trim() === "") {
    errors.push("Message is Required");
  }

  return errors;
}
