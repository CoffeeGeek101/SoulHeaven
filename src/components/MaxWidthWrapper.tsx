import { cn } from '@/lib/utils';
import React from 'react'

interface MaxWidthWrapperProps {
    className?: string;
    children: React.ReactNode;
}

const MaxWidthWrapper = ({className, children} : MaxWidthWrapperProps) => {
  return (
    // mx-auto  ->  centering the element horizontally.
    <div className={cn('mx-auto w-full max-w-screen-xl px-20 md:px-20 lg:px-2.5', className)}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper