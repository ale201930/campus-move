export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-06-18'

export const dataset = assertValue(
  'production',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  'kto9zoq6',
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = 'skchVTZyOqdwgTPdnEmRqhPbqZH2VHOCQAWTkIIIg6XEFIqqiXiggGzxKFx3bejaZUXwXJDGzv0CmQThS2bfx3vBnK4RVH0PBF4PJbcw3G9ZVtW3WocJ4A0atRJzsz6oHaImSuo3Sa2GkFjjz0Cwb99sLOoP66CADLQQIjZkzdWw3byjioUQ'
export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
