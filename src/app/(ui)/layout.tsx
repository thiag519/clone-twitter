import { NavItem } from "@/componets/nav/nav-item"
import { NavLogout } from "@/componets/nav/nav-logout"
import { NavMyProfile } from "@/componets/nav/nav-myprofile"
import { Logo } from "@/componets/ui/logo"
import { RecommendationArea } from "@/componets/ui/recommendation-area"
import { SearchInput } from "@/componets/ui/search-input"
import { TrendingArea } from "@/componets/ui/trending-area"
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons"
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <main className=" min-h-screen flex justify-center mx-auto max-w-7xl">
      <section 
        className="hidden lg:flex flex-col sticky top-0
        h-screen w-72 px-3 border-r-2 border-gray-900"
      >
        <div className="flex-1 mt-6">
          <Logo size={24}/>
          <nav className="mt-11">
            <NavItem
              href="/home"
              icon={faHouse}
              label=""          
            />
             <NavItem
              href="/profile"
              icon={faUser}
              label="My profile"          
            />
          </nav>
        </div>
        <div className="mb-6 flex flex-col gap-4">
          <NavLogout/>
          <NavMyProfile/>
        </div>
      </section>

      <section className="flex-1 max-w-xl">{children}</section>

      <section
        className="hidden lg:flex flex-col sticky top-0
        h-fit w-96 px-8 py-6 border-l-2 gap-6 border-gray-900"
      >
        <SearchInput hideOnSearch />
        <TrendingArea/>
        <RecommendationArea/>
      </section>
    </main>
  )
}