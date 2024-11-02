import React from 'react'
import Link from 'next/link'

const Dropdown = () => {
  return (
    <div className='rounded-lg px-4 flex flex-col space-y-4 items-start'>
        <Link href="/mental" className="text-base font-medium text-primary hover:text-primary-foreground">
              Mental Development / Mind
            </Link>
            <Link href="/spiritual" className="text-base font-medium text-primary hover:text-primary-foreground">
              Spiritual
            </Link>
            <Link href="/emotional" className="text-base font-medium text-primary hover:text-primary-foreground">
              Emotional
            </Link>
            <Link href="/money" className="text-base font-medium ">
              Money/Financial Development
            </Link>
            <Link href="/parenting" className="text-base font-medium text-primary hover:text-primary-foreground">
              Parenting
            </Link>
            <Link href="/features" className="text-base font-medium text-primary hover:text-primary-foreground">
              Marriage
            </Link>
            <Link href="/marriage" className="text-base font-medium text-primary hover:text-primary-foreground">
              Personal Development
            </Link>
            <Link href="/time" className="text-base font-medium text-primary hover:text-primary-foreground">
              Time Management
            </Link>
    </div>
  )
}

export default Dropdown