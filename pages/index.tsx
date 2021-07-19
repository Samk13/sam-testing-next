import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React from 'react'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Next js pre rendering</h1>
      <Link href="/users-list">Users list</Link>
      <Link href="/posts">Posts</Link>
    </div>
  )
}
export default Home
