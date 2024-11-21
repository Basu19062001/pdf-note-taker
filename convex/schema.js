import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    userName: v.string(),
    email: v.string(),
    imageUrl: v.string(),
  }),

  pdfFiles:defineTable({
    fileId:v.string(),
    storageId:v.string(),
    fileName:v.string(),
    fileUrl:v.string(),
    createdBy:v.string()
  }),

  documents: defineTable({
    embedding: v.array(v.number()),
    text: v.string(), 
    metadata: v.object({
      fileId: v.string(), // Define `fileId` inside the `metadata` object
    }),
  }).vectorIndex("byEmbedding", {
    vectorField: "embedding",
    dimensions: 768,
  })
  
});
