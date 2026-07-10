import { createClient } from "next-sanity";
import { notFound } from "next/navigation";
import ProjectContent from "../../components/ProjectContent"; 

const client = createClient({
  projectId: "aqbeyoh4",
  dataset: "production",
  apiVersion: "2024-04-20",
  useCdn: false,
});

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const query = `*[_type == "project" && slug.current == $slug][0]{ title, shortDescription }`;
  const project = await client.fetch(query, { slug });

  if (!project) return {};

  return {
    title: `${project.title} | Bazy Inc.`,
    description: project.shortDescription, 
  };
}

export default async function ProjectPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const query = `*[_type == "project" && slug.current == $slug][0]{
    title,
    services,
    "imageUrl": mainImage.asset->url,
    "videoUrl": thumbnailVideo.asset->url,
    "heroImageUrl": heroImage.asset->url,
    "heroVideoUrl": heroVideo.asset->url,
    body,
    "galleryUrls": gallery[].asset->url
  }`;

  const project = await client.fetch(query, { slug });

  if (!project) {
    return notFound();
  }

  return <ProjectContent project={project} />;
}