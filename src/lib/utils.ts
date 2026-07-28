import { clsx, type ClassValue } from "clsx"

// Lightweight cn() — clsx only. tailwind-merge (15KB gzip) was dropped for
// bundle size; the shadcn components on this site don't rely on conflicting
// Tailwind class merging, so plain clsx composition is sufficient.
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}
