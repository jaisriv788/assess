import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: any) {
  const { movieId, userName, rating, comments } = await req.json();
  console.log(movieId, userName, rating, comments);

  try {
    const newReview = await prisma.rating.create({
      data: {
        movieId, // Movie ID is used to reference the movie
        reviewerName: userName, // Correctly saving the user's name
        rating,
        reviewComments: comments, // Saving the comments
      },
    });

    // Optionally update the average rating for the movie
    const reviews = await prisma.rating.findMany({ where: { movieId } });
    const averageRating =
      reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

    await prisma.movie.update({
      where: { id: movieId },
      data: { averageRating },
    });

    return NextResponse.json(newReview);
  } catch (error) {
    console.error("Error creating review:", error);
    return NextResponse.json({ error: "Error creating review" }, { status: 500 });
  }
}
