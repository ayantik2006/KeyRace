import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

export async function GET(req: { url: string | URL; }) {
  const { searchParams } = new URL(req.url);
  const wordsNumber = Number(searchParams.get("wordsNumber")) || 30;

  return NextResponse.json({
    words: faker.word.words(wordsNumber),
  });
}
