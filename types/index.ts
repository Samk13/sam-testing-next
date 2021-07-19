export interface Posts {
  userId: number
  id: number
  title: string
  body: string
}

export interface PostProps {
  posts: Posts[]
}
