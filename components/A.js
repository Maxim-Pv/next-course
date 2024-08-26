import Link from "next/link";
import st from '../styles/A.module.css'

export default function A({text, href}) {
  return (
    <Link href={href}>
      <span className={st.link}>{text}</span>
    </Link>
  )
}