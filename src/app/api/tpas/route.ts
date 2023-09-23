import { NextRequest, NextResponse } from "next/server";
import TPAS from "@/models/tpas.model";
import dataTPAS from "@/types/tpas.type";
import validateDataTPAS from "@/utils/data.validate";
import { cookies } from "next/headers";

async function handlePostRequest(request: NextRequest) {
  try {
    const cookieStore = cookies();
    const dataJSON = await request.json();
    const { data, token }: { data: dataTPAS; token: string } = dataJSON;

    if (cookieStore.get("captchaToken")) {
      return NextResponse.json(
        {
          success: false,
          error: "Data has already been sent",
        },
        { status: 400 }
      );
    }

    cookieStore.set({
      name: "captchaToken",
      value: token,
      maxAge: 3600,
    });

    // Validate Captcha Token
    // const validToken: any = await validateToken(token);
    // if (validToken === "" || validToken?.score < 0.5) {
    //   throw new Error("Failed Captcha Token");
    // }

    const validationErrors = validateDataTPAS(data);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          errors: validationErrors,
        },
        { status: 400 }
      );
    }

    const response = await new TPAS(data).sendData();
    return NextResponse.json(
      {
        success: true,
        data: {
          message: "Data sent successfully",
          data: { response },
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}

async function handleGetRequest() {
  try {
    const tpas = await TPAS.getData();
    return NextResponse.json({ success: true, data: tpas }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  return handlePostRequest(request);
}

export async function GET() {
  return handleGetRequest();
}
