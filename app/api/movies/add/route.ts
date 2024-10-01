import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: any) {
  const { name, releaseDate } = await req.json();
  const formattedDate = new Date(`${releaseDate}T00:00:00.000Z`);
  console.log(name, releaseDate);
  const newUser = await prisma.movie.create({
    data: {
      name,
      releaseDate:formattedDate,
    },
  });
  return NextResponse.json(newUser);
}
