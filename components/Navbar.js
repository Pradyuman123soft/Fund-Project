"use client"
import React,{useState, useRef, ffect, useEffect} from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {

  const {data:session  } = useSession()
  const [showDropDown, setshowDropDown] = useState(false)
  const dropDownRef = useRef(null)

  const handleClicOutside=(e)=>{
    if(dropDownRef.current && !dropDownRef.current.contains(e.target)){
      setshowDropDown(false);
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClicOutside);
    return () => {
    document.removeEventListener('mousedown', handleClicOutside);
    };
  }, []);
 
  




  return (
    <nav className='bg-slate-700 h-20 flex justify-between text-white md:px-8 px-3 items-center'>
      <Link href={"/"}><div className='font-bold md:text-xl text-[15px] flex justify-center gap-2 text-center' >
        <span>!!GetMeAChai!!</span>
        <span><img className='md:w-[4vw] w-[10vw]' src="/coffeecup-removebg.png" alt="" /></span>
      </div>
      </Link>
      <div className='relative ' ref={dropDownRef}>
        {session && <>

          <button id="dropdownHoverButton" onClick={()=>{setshowDropDown(!showDropDown)}} data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 max-w-xs w-[50vw] mx-5 truncate overflow-hidden whitespace-nowrap " type="button">Welcome {session.user.email.split("@")[0]}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
          </svg>
          </button>

          <button id="dropdownHoverButton" onClick={()=>{setshowDropDown(!showDropDown)}} data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-white sm:w-20 w-12 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:px-5 px-2 py-2.5 text-center inline-flex lg:hidden items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 max-w-xs  mx-2 md:mx-5 truncate overflow-hidden whitespace-nowrap" type="button">{session.user.email.charAt(0).toUpperCase()}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
          </svg>
          </button>


          <div id="dropdownHover" className={`z-10 ${showDropDown ? "":"hidden"} bg-slate-800 text-white absolute lg:left-[130px] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm  dark:text-gray-200" aria-labelledby="dropdownHoverButton">
              <li>
                <Link href={"/"} className="block px-4 py-2 hover:bg-gray-500 dark:hover:bg-gray-600 dark:hover:text-white">Home</Link>
              </li>
              <li>
                <Link href={"/dashboard"} className="block px-4 py-2 hover:bg-gray-500 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.email.split("@")[0]}`} className="block px-4 py-2 hover:bg-gray-500 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
              </li>
              <li>
                <Link onClick={()=>{signOut()}} href="#" className="block px-4 py-2 hover:bg-gray-500 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div>

        </>}
        {session && <button onClick={() => { signOut() }} type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">LogOut
        </button>}
        {!session && <Link href={"/login"}><div><button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login
        </button>
        </div></Link>}
      </div>
    </nav>
  )
}

export default Navbar
