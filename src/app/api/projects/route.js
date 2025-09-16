import { NextResponse } from "next/server";
import { projects } from "../../../lib/project";

export async function GET() {
  return NextResponse.json(projects);
}
