import { z } from "zod"

// Section schemas
export const AttentionSectionSchema = z.object({
  type: z.literal("attention"),
  heading: z.string(),
  sub: z.string().optional(),
})

export const ProblemSectionSchema = z.object({
  type: z.literal("problem"),
  bullets: z.array(z.string()),
})

export const SolutionSectionSchema = z.object({
  type: z.literal("solution"),
  points: z.array(z.string()),
})

// Union schema for all section types
export const SectionSchema = z.discriminatedUnion("type", [
  AttentionSectionSchema,
  ProblemSectionSchema,
  SolutionSectionSchema,
])

// Main spec schema
export const LPSpecSchema = z.object({
  title: z.string(),
  sections: z.array(SectionSchema),
})

// Type exports
export type AttentionSection = z.infer<typeof AttentionSectionSchema>
export type ProblemSection = z.infer<typeof ProblemSectionSchema>
export type SolutionSection = z.infer<typeof SolutionSectionSchema>
export type Section = z.infer<typeof SectionSchema>
export type LPSpec = z.infer<typeof LPSpecSchema>
