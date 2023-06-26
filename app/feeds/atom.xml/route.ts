import { generateFeeds } from "@/lib/feed";
import { NextResponse } from "next/server";

export async function GET() {
  const feed = await generateFeeds();
  return new NextResponse(feed.atom1(), {
    headers: { "Content-Type": "application/atom+xml" },
  });
}
