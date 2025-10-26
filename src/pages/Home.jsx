import React from 'react'
import Navbar from '../components/Navbar'
import profileimg from '../assets/lllll.jpeg'
import fblogo from '../assets/icons8-linkedin-48.png'
import iglogo from '../assets/icons8-instagram-logo-48.png'
import linktree from '../assets/icons8-linktree-48.png'
import github from '../assets/icons8-github-logo-64.png'
import { Link } from 'react-router-dom'
import Project from './Project'
import Resume from './Resume'
function Home() {
  return (
    <div >
       <Navbar />
<div>
    <div className=' sm: p-[10px]  md:flex justify-center mt-[90px] cursor-pointer gap-[100px] position-center'>
<div className='sm:shadow-xl p-[10px] md: bg-[#e3e3e8] ml-[50px]  w-[300px] flex-col mb-[40px] items-center rounded-[30PX] h-[500px] text-center shadow-xl shadow-black/50 lg:w-[400px]'>
    <img src={profileimg} alt="" width={200} className=' lg:ml-[100px] mt-[30px] rounded-[100px] md: ml-[53px]' />
    <h2 className='text-[30px] font-bold text-[#000046] mt-[60px] '>Amazue Chimarijem </h2>
    <p className='font-bold text-[30px] text-[#000046] sm: mb-[140px] '>Web Developer <br />
    <div className='flex justify-center gap-3.5'>
        <a href="https://www.instagram.com/chima_amazue/"><img src={iglogo} width={30} alt="" className='' /></a>
        <a href="https://www.linkedin.com/in/chimarijem-amazue-684569287/"><img src={fblogo} alt="" width={30} /></a>
        <a href="https://linktr.ee/chimaamazue?fbclid=PAZXh0bgNhZW0CMTEAAac-oirNBOl9BohQOUysTOEUbX7PYp_KviSX_O-u5ZnXMAFXT7ytUFpcE29C4w_aem_L1d4pbhF7g8m-OBYT65paw"><img src={linktree} alt="" width={30} /></a>
        <a href="https://github.com/Amazue1211"><img src={github} alt="" width={30} /></a>
    </div>
  
     </p>
    
</div>

<div className='text-center  item-center md: p-[20px]'>
    <h2 className=' sm:text-[50px]  md:text-[50px] font-bold text-[#000046]'>
        HELLO <br />
        EVERYONE
    </h2>
    <p className='sm:text-[30px]  md: text-[#000046] text-[20px]'>Here's what i am and what i do </p>
   <div className='sm: flex gap-1 ml-[50px] md:ml-[100px] lg: mb-[10px] leading-[20px]'> <Link to='/resume'><button className='w-[140px] h-[40px] rounded-[50px] bg-[#000046] text-[white] mt-[8px] mb-[20px] cursor-pointer active:bg-[#58589c]'>Resume</button></Link> <Link to='/project'><button  className='w-[140px] h-[40px] rounded-[50px] border-gray-900 text-[#100f0f] mt-[10px] mb-[20px] cursor-pointer active:bg-[#9494ec82]'>Project</button></Link></div>
   <p className="sm:w-[200px] md:w-[500px] sm:text-left md:text-center  items-center justify-center">
I am a student of Mountain Top University Ibafo Ogun State <br />
    currently an intern in neo cloud technologies gwarinpa abuja <br />
    working as a front-end developer which i have been able to complete 
    multiple project which are available in <a href="#">Blog</a>
    </p>
 
</div>
    </div>
</div>

   
    </div> 
    
  )
}

export default Home
