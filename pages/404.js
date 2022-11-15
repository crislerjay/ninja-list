import React, { useEffect } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      router.push('/')
    }, 3000)
  }, [])

  return (
    <div>
      <div className='not-found'>
        <h1>Oooops</h1>
        <h2>That page cannot be found.</h2>
        <p>Go back to the <Link href="/">Homepage</Link></p>
      </div>
    </div>
  )
}

export default NotFound