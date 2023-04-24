import React, { useContext, useState } from 'react'
import { RiMoonLine, RiLinkedinLine } from 'react-icons/ri'
import { IoLogoInstagram, IoIosArrowDown } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import { navLink } from '../../data/nav'
import Context from '../../Context/Themes'
import { FiSun } from 'react-icons/fi'
import './index.css'

export default function Header () {
  const { Themes, setDarkMode, darkMode } = useContext(Context)
  const handleDarkMode = () => setDarkMode(!darkMode)
  const [isShow, setShow] = useState(false)

  const handleShowMenu = (e) => {
    e.preventDefault()
    setShow(!isShow)
  }

  return (
    <>
      <header className='h-24 z-10 fixed left-0 top-0 lg:px-28 px-7  w-full'>
        <div className='flex justify-between items-center w-full h-[100%]'>
          <div>
            <a
              href='/'
              className='w-10 h-10 p-1 rounded-full relative logoPortfolio block'
              style={{ border: `1px solid ${Themes.borderNav}`, backdropFilter: 'blur(15px)' }}
            >
              <div className='w-full h-full rounded-full'>
                <img src='https://res.cloudinary.com/dfkvvcfxs/image/upload/v1682079730/logo_vorruv.png' alt='logo portfolio' className='w-full h-full object-cover' />
              </div>
            </a>
          </div>
          <div>
            <nav
              className={`gap-5 md:flex navBar text-sm py-[6px] font-semibold px-6 ${isShow ? 'flex' : 'hidden'}`}
              style={{ border: `1px solid ${Themes.borderNav}`, backdropFilter: 'blur(15px)', color: Themes.navColor }}
            >
              <div className='absolute right-7 top-6 btnOpenMenu'>
                <button onClick={handleShowMenu} className='text-xl'>
                  <MdClose />
                </button>
              </div>
              <div className='titleMenu'>
                <h5 className='text-base'>Menu</h5>
              </div>
              {navLink.map(({ label, href }, inx) => (
                <a
                  href={href}
                  className='px-1 l nav__links'
                  style={{ color: Themes.text }}
                  key={inx}
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className={`w-full h-[100vh] md:hidden backgroundMenu ${isShow ? 'absolute' : 'hidden'} top-0 left-0`} onClick={handleShowMenu} />
          </div>
          <div className='flex gap-3 items-center'>
            <div className='btnOpenMenu'>
              <a
                href='https://www.linkedin.com/in/michael-santucho-0a8876256'
                target='_blank'
                onClick={handleShowMenu}
                className='text-[13px] flex items-center font-normal rounded-full py-[7px] px-3'
                style={{ border: `1px solid ${Themes.borderNav}`, color: Themes.text, backdropFilter: 'blur(15px)' }}
                rel='noreferrer'
              >
                Menu <span className='text-xs ml-1'><IoIosArrowDown /></span>
              </a>
            </div>
            <a
              href='https://www.linkedin.com/in/michael-santucho-0a8876256'
              target='_blank'
              className='text-[20px] hover:text-green-400 rounded-full p-[6px]'
              style={{ border: `1px solid ${Themes.borderNav}`, color: Themes.text, backdropFilter: 'blur(15px)' }}
              rel='noreferrer'
            >
              <RiLinkedinLine />
            </a>
            <a
              href='https://www.instagram.com/michael718s'
              target='_blank'
              className='text-[20px] rounded-full hover:text-pink-400 p-[6px]'
              style={{ border: `1px solid ${Themes.borderNav}`, color: Themes.text, backdropFilter: 'blur(15px)' }}
              rel='noreferrer'
            >
              <IoLogoInstagram />
            </a>
            <button
              className='text-[20px] hover:text-amber-400 rounded-full p-[6px]'
              style={{ border: `1px solid ${Themes.borderNav}`, color: Themes.text, backdropFilter: 'blur(15px)' }}
              onClick={() => handleDarkMode()}
            >
              {
                darkMode ? <FiSun /> : <RiMoonLine />
              }
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
