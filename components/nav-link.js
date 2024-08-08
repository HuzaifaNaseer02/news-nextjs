'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NavLink = ({ href, children }) => {
  const path = usePathname()
  return (
    <Link className={path.startsWith(href) ? 'active' : undefined} href={href}>
      {children}
    </Link>
  )
}

export default NavLink
