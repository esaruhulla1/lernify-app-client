import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <Link href={"/"} className='text-xl'>LerniFY</Link>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  )
}
