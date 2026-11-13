import type { MetadataRoute } from "next"

import { blogPosts } from "@/lib/blog/posts"

const baseUrl = "https://www.apollonbc.com"

const staticPaths = [
  "/",
  "/about",
  "/music",
  "/beauty-public",
  "/correction",
  "/facial-palsy",
  "/online-medical",
  "/online-skincare",
  "/blog",
  "/en",
  "/en/about",
  "/en/music",
  "/en/facial-palsy",
  "/en/injectable-correction",
  "/en/online-consultation",
  "/en/blog",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
  }))

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}${post.language === "en" ? "/en/blog" : "/blog"}/${post.slug}`,
    lastModified: post.publishedAt,
  }))

  return [...staticPages, ...blogPages]
}
