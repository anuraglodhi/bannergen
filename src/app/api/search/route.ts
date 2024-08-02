import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchKeyword = new URLSearchParams(req.url.split("?")[1]).get("q");
  if (!searchKeyword) {
    return new Response("Please provide a search keyword", { status: 400 });
  }

  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchKeyword}&page=1&per_page=10`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        },
      }
    );

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response("An error occurred while fetching data", {
      status: 500,
    });
  }
}
