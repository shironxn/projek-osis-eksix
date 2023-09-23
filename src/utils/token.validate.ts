import axios from "axios";

async function validateToken(token: string) {
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

export default validateToken;
