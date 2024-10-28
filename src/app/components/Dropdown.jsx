import React from 'react'
import Link from 'next/link'

const Dropdown = () => {
  return (
    <div className='rounded-lg px-12 flex flex-col space-y-2 items-start'>
        <Link href="/features" className="text-base font-medium text-primary hover:text-primary-foreground">
              Mental Development / Mind
            </Link>
            <Link href="/features" className="text-base font-medium text-primary hover:text-primary-foreground">
              Spiritual
            </Link>
            <Link href="/features" className="text-base font-medium text-primary hover:text-primary-foreground">
              Emotional
            </Link>
            <Link href="/features" className="text-base font-medium text-primary hover:text-primary-foreground">
              Money/Financial Development
            </Link>
            <Link href="/features" className="text-base font-medium text-primary hover:text-primary-foreground">
              Parenting
            </Link>
            <Link href="/features" className="text-base font-medium text-primary hover:text-primary-foreground">
              Marriage
            </Link>
            <Link href="/features" className="text-base font-medium text-primary hover:text-primary-foreground">
              Personal Development
            </Link>
            <Link href="/features" className="text-base font-medium text-primary hover:text-primary-foreground">
              Time Management
            </Link>
    </div>
  )
}

export default Dropdown