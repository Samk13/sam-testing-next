import React from 'react'

export default function PostList({posts}) {
    return (
        <div>
            <h1>Posts list</h1>

            {posts.map(post => {
                return (
                    <div key={post.id}>
                        <h2>{post.id} - {post.title}</h2>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export async function getStaticProps() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await posts.json()
    return {
        props: {
            posts: data.slice(0, 10)
        }
    }
}
