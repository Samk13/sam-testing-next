import style from '../styles/Header.module.css'
import Link from 'next/link'
import {VerticalSpacer, Spacer} from '../utils/spacing'
export default function Header() {
    return (
        <header className={style.Header}>
            <div>
                <Link className={style.Link} href="/">Logo</Link>
            </div>
            <div>
                <Link className={style.Link} href="/users">Users</Link>
                <Spacer factor="1" />
                <Link href="/posts">Posts</Link>
            </div>
        </header>
    )
}
