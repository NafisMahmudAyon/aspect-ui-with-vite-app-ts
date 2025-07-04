'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface SidebarFooterProps {
  children: ReactNode
  className?: string
}

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ children, className = "", ...rest }) => {
  return <div className={cn('border-t-2 border-border transition-all duration-200 ease-in-out px-2.5 py-3', className)} {...rest}>{children}</div>
}
