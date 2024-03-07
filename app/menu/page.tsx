import Link from "next/link"

export const Menu = () => {
    return (
        <div>
            <Link href={'/home'} >Home </Link>
            <Link href={'/contact'} > contact </Link>
        </div>
    )
}