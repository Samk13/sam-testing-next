import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
     <h1>Next js pre rendering</h1>
     <Link href="/users">Users</Link>
     <Link href="/posts">Posts</Link>
    </div>
  )
}
