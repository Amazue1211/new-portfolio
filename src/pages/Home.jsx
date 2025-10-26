import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

import Navbar from '../components/Navbar'
import profileimg from '../assets/IMG_0178.jpg'
import fblogo from '../assets/icons8-linkedin-48.png'
import iglogo from '../assets/icons8-instagram-logo-48.png'
import linktree from '../assets/icons8-linktree-48.png'
import github from '../assets/icons8-github-logo-64.png'
import Project from './Project'
import Resume from './Resume'

function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.fade-in',
        {
          opacity: 0,
          y: 100,
          scale: 0.85,
          rotateX: 15,
          filter: 'blur(5px)',
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          filter: 'blur(0px)',
          duration: 1.8,
          ease: 'power4.out',
          stagger: 0.4,
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef}>
      <Navbar />
      <div>
        <div className="sm:p-[10px] md:flex justify-center mt-[90px] cursor-pointer gap-[100px]">
          {/* Profile Card */}
          <div className="fade-in sm:shadow-xl p-[10px] md:bg-[#e3e3e8] ml-[50px] w-[300px] flex-col mb-[40px] items-center rounded-[30px] h-[500px] text-center shadow-xl shadow-black/50 lg:w-[400px]">
            <a href={profileimg}>
              <img
                src={profileimg}
                alt="Profile"
                width={200}
                className="sm:mb-[10px] lg:ml-[100px] mt-[10px] rounded-[100px] md:h-[230px] ml-[45px]"
              />
            </a>
            <h2 className="sm:mt-10px md:text-[30px] font-bold text-[#000046] mt-[60px]">
              Amazue Chimarijem
            </h2>
            <p className="font-bold text-[30px] text-[#000046] sm:mb-[140px]">
              Web Developer
            </p>
            <div className="flex justify-center gap-3.5">
              <a href="https://www.instagram.com/chima_amazue/">
                <img src={iglogo} width={30} alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/in/chimarijem-amazue-684569287/">
                <img src={fblogo} alt="LinkedIn" width={30} />
              </a>
              <a href="https://linktr.ee/chimaamazue?fbclid=PAZXh0bgNhZW0CMTEAAac-oirNBOl9BohQOUysTOEUbX7PYp_KviSX_O-u5ZnXMAFXT7ytUFpcE29C4w_aem_L1d4pbhF7g8m-OBYT65paw">
                <img src={linktree} alt="Linktree" width={30} />
              </a>
              <a href="https://github.com/Amazue1211">
                <img src={github} alt="GitHub" width={30} />
              </a>
            </div>
          </div>

          {/* Text Section */}
          <div className="fade-in text-center items-center md:p-[20px]">
            <h2 className="sm:text-[50px] md:text-[50px] font-bold text-[#000046]">
              HELLO <br />
              EVERYONE
            </h2>
            <p className="sm:text-[30px] md:text-[20px] text-[#000046]">
              Here's what I am and what I do
            </p>
            <div className="sm:flex gap-1 ml-[50px] md:ml-[100px] lg:mb-[10px] leading-[20px]">
              <Link to="/resume">
                <button className="w-[140px] h-[40px] rounded-[50px] bg-[#000046] text-white mt-[8px] mb-[20px] cursor-pointer active:bg-[#58589c]">
                  Resume
                </button>
              </Link>
              <Link to="/project">
                <button className="w-[140px] h-[40px] rounded-[50px] border-gray-900 text-[#100f0f] mt-[10px] mb-[20px] cursor-pointer active:bg-[#9494ec82]">
                  Project
                </button>
              </Link>
            </div>
            <p className="sm:w-[200px] md:w-[500px] sm:text-left md:text-center items-center justify-center">
              I am a student of Mountain Top University, Ibafo, Ogun State. <br />
              Currently an intern at NeoCloud Technologies, Gwarinpa, Abuja, <br />
              working as a Front-End Developer. I have completed multiple
              projects which are available in{' '}
              <Link to="/blog" className="border-b-[2px]">
                Blog
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
