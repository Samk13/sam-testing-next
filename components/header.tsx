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
        <Link href="/posts">Posts</Link>
      </div>
    </header>
  )
}
export default Header
