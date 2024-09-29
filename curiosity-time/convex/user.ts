import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        email: v.string(),
        imageUrl: v.string(),
        clerkId: v.string(),
        name: v.string(),
        role: v.string(),
        profileImageUrl : v.string()
    }),
    podcasts: defineTable({
        user: v.id("user"),
        podcastTitle: v.string(),
        podcastDescription: v.string(),
        audioUrl: v.optional(v.string()),
        audioStorageId: v.optional(v.id("_storage")),
        imageUrl: v.optional(v.string()),
        imageStorageId: v.optional(v.id("_storage")),
        }),
})