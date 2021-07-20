import style from '../styles/Header.module.css'
import Link from 'next/link'
import { Spacer } from '../utils/spacing'

const Header: React.FC = () => {
  return (
    <header className={style.Header}>
      <div>
        <Link href="/">
          <a className={style.Link}>Logo</a>
        </Link>
      </div>
      <div>
        <Link href="/users-list">
          <a className={style.Link}>Users list</a>
        </Link>
        <Spacer factor={1} />
        <Link href="/posts">
          <a className={style.Link}>Posts</a>
        </Link>
        <Spacer factor={1} />
        <Link href="/profile">
          <a className={style.Link}>Profile</a>
        </Link>
        <Spacer factor={1} />
        <Link href="/about">
          <a className={style.Link}>About</a>
        </Link>
      </div>
    </header>
  )
}
export default Header
