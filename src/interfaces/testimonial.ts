import type { User } from './user'

export interface Testimonial {
  id: number | string
  title: string
  content: string
  user: User
  description: string // Completed the 'des' field as 'description'
}
