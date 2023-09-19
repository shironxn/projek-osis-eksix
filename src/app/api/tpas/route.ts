import TPAS from "@/models/tpas.model";
import dataTPAS from "@/types/tpas.type";
import { validateDataTPAS } from "@/utils/validation";
import { NextRequest, NextResponse } from "next/server";
import NextCors from "nextjs-cors";

export async function POST(request: NextRequest) {
  try {
    const data: dataTPAS = await request.json();

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

    const tpas = await new TPAS(data).sendData();
    return NextResponse.json(
      {
        success: true,
        data: {
          message: "Data Sent Successfully",
          tpas: {
            tpas,
          },
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const tpas = await TPAS.getData();
    return NextResponse.json(
      { success: true, data: tpas },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
