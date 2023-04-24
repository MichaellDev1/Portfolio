import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header'
import Hero from '../Hero'
import Footer from '../Footer'
import AbountMe from '../AbountMe'
import Skills from '../Skills'
import Projects from '../Projects'
import Contact from '../Contact'
import Context from '../../Context/Themes'
import './index.css'

export default function Home () {
  const { Themes } = useContext(Context)

  return (
    <main className='md:px-28 px-7 w-[100%] transition-[background-color]' style={{ backgroundColor: Themes.bgc }}>
      <Header />
      <Hero />
      <AbountMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
