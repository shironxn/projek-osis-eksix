import dataTPAS from "@/types/tpas.type";

export function validateDataTPAS(data: dataTPAS): string[] {
  const errors: string[] = [];

  if (!data.name || data.name.trim() === "") {
    errors.push("Name is Required");
  }

  if (!data.aspiration || data.aspiration.trim() === "") {
    errors.push("Aspirations is Required");
  }

  return errors;
}
