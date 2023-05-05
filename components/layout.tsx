import { CHeader } from "@/components/CHeader"
import { SiteHeader } from "@/components/site-header"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <SiteHeader />
      <CHeader />
      <main>{children}</main>
    </>
  )
}
