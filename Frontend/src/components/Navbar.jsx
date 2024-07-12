import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

//react-icons
import { FaBarsStaggered, FaRust, FaXmark } from "react-icons/fa6";


const Navbar = () => {
    const [ismenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIssticky] = useState(false);

    //toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!ismenuOpen);
    }

    useEffect(()=> {
        const handleScroll = () => {
            if (window.scrollY > 100){
                setIssticky(true);
            }
            else{
                setIssticky(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    }, [])

    //navItems  is here
    const navItems = [
        {link: 'Home', path: '/'},
        {link: 'About', path: '/about'},
        {link: 'Sell Your Book', path: '/admin/dashboard'},
        {link: 'Shop',   path: '/shop' },
        {link: 'Blog', path: '/blog'  }
    ]
  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
            <div className='flex justify-between'>
                {/*logo*/}
                <Link to="/" className='text2xl font-bold text-red-600 flex items-center gap-2'>
                <FaRust className='inline-block size-8'/>Reader's Cave</Link>

                {/*nav items for large device*/}

                <ul className='md:flex space-x-12 hidden '>
                    {
                        navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base
                         text-black uppercase cursor-pointer hover:text-red-700'>{link}</Link>)
                    }
                </ul>

                {/*btn for lg devices */}
                <div className='space-x-12 hidden lg;flex items-center'>
                    <button><FaBarsStaggered className='w-5 hover:text-blue-700'/></button>
                </div>
                {/*btn for mobile devices */}
                <div className=''>
                    <button onClick={toggleMenu} className='text-black focus:outline-none'>
                        {
                            ismenuOpen ? <FaXmark className='h-5 w-5 text-black'/>: <FaBarsStaggered className='h-5 w-5 text-black'/>
                        }
                    </button>
                </div>
            </div>

            {/*navitems for sm devices */}
            <div className={`space-y-4 px-4 mt-16 py-7 bg-red-700 text ${ismenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                 navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base
                 text-white uppercase cursor-pointer'>{link}</Link>)
                  }
            </div>
        </nav>
    </header>
  )
}

export default Navbar
