import type { Posts, PostProps } from '../../types'
import { GetStaticProps } from 'next'
import { NextPage } from 'next'

const PostList: NextPage<PostProps> = ({ posts }) => {
  return (
    <div>
      <h1>Posts list</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>
              {post.id} - {post.title}
            </h2>
            <p>{post.body}</p>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

const getStaticProps: GetStaticProps = async () => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data: Posts[] = await posts.json()
  return {
    props: {
      posts: data.slice(0, 10),
    },
  }
}

export default PostList
export { getStaticProps }
