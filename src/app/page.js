import { createClient } from "next-sanity";
import Portfolio from "./Portfolio";

// Connect to your specific Sanity database
const client = createClient({
  projectId: "aqbeyoh4", 
  dataset: "production",
  apiVersion: "2024-04-20",
  useCdn: false,
});

export default async function Home() {
  // This is a GROQ query. It asks Sanity for all projects, 
  // orders them by the number you typed in, and fetches the media URLs.
  const query = `*[_type == "project"] | order(order asc) {
    _id,
    title,
    client,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url,
    "videoUrl": thumbnailVideo.asset->url,
    shortDescription
  }`;

  // Fetch the data
  const projects = await client.fetch(query);

  // Pass the data into your animated component
  return <Portfolio projects={projects} />;
}