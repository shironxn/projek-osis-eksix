import TPAS from "@/models/tpas.model";
import dataTPAS from "@/types/tpas.type";
import { NextResponse } from "next/server";
import React from "react";

export async function POST(request: Request) {
  const data: dataTPAS = await request.json();
  const tpas = await new TPAS(data).sendData();
  // console.log(data);

  return NextResponse.json({ message: "Success", tpas });
}
