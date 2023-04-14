import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from 'react'
import { BsSearch, BsBellFill } from 'react-icons/bs'

import logo from '@/assets/netflix_logo.svg'
import avatar from '@/assets/avatar.png'
import useAuth from "../../hooks/useAuth"


const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false)

  const { logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0){
        setIsScrolled(true)
      }else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image 
          src={logo}
          alt="nexflix_logo"
          height={25}
          className="cursor-pointer object-cover"
        />

        <ul className="hidden space-x-6 md:flex ">
          <li className="header-link">Home</li>
          <li className="header-link">Tv Shows</li>
          <li className="header-link">Movie</li>
          <li className="header-link">New & Popular</li>
          <li className="header-link">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-6 text-sm font-light ">
        <BsSearch className="hidden h-5 w-5 sm:inline"/>
        <p className="hidden lg:inline">Kids</p>
        <BsBellFill className="h-5 w-5"/>

        <Link href={"/account"}>
          <Image 
            src={avatar}
            alt="profile_avatar"
            height={40}
            className="cursor-pointer rounded"
            onClick={logout}
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
