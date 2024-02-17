'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const About = () => {
  const router= useRouter()
  return (
    <div>
      <Link href={"/"}>about college page</Link>
      <button onClick={()=> router.push("/")}>click me</button>
    </div>
  )
}

export default About
