import { useState } from "react"
import { LuMenu, LuX } from "react-icons/lu"
import { Link } from "react-router-dom"

type NavItem = {
  title: string;
  href: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navData: NavItem[] = [
    {
      title: "Learn",
      href: "/",
    },
    {
      title: "Build",
      href: "/",
    },
    {
      title: "Explore",
      href: "/",
    },
    {
      title: "Join",
      href: "/",
    },
    {
      title: "Help",
      href: "/",
    },
  ]

  return (
    <nav className="fixed w-full py-4 md:py-8 bg-transparent backdrop-blur-md z-50">
      <div className="py-3 flex items-center justify-between relative container">
        {/* Left - Logo */}
        <div className="flex-1 flex items-center">
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5846FB]">coinFusion</span>
        </div>

        {/* Center - Nav Links */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-3 lg:space-x-6 text-black font-normal text-sm lg:text-lg bg-white px-8 lg:px-24 py-3 lg:py-5 rounded-full">
          {navData.map((item, index) => (
            <Link key={index} className="hover:text-blue-600" to={item.href}>
              {item.title}
            </Link>
          ))}
        </div>

        {/* Right - User Icon and Menu Toggle */}
        <div className="flex-1 flex items-center justify-end md:hidden space-x-4">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none" aria-label="Toggle Menu">
            {isOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white p-4 rounded-lg shadow-lg md:hidden">
            {navData.map((item, index) => (
              <Link
                key={index}
                className="block py-2 px-4 hover:bg-gray-100 hover:text-blue-600"
                to={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
