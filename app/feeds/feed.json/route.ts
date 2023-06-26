import { generateFeeds } from "@/lib/feed";
import { NextResponse } from "next/server";

export async function GET() {
  const feed = await generateFeeds();
  return NextResponse.json(feed.json1());
}
