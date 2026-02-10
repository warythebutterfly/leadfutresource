import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PrimBtn from '../micros/PrimBtn'
import PopoverComp from '../micros/Popover'
import { AnimatePresence, motion } from 'framer-motion'
import handleBookMeetingClick from '../../utils/BookCalendly'

const products = [
  {
    name: 'FungiGro',
    description: 'Pioneering waste-to-nutrition innovations',
    href: '/products/fungigro',
    icon: IconOne,
  },
  {
    name: 'Edible & Medicinal mushrooms',
    description: 'Edible & medicinal mushrooms',
    href: '/products/mushroom',
    icon: IconOne,
  },

  {
    name: 'Biomass Solutions',
    description: 'Briqquettes from organic matter',
    href: '/products/biomass',
    icon: IconTwo,
  },
  
  {
    name: 'Consulting services',
    description: 'Book an online or offline meeting with us',
    href: "##",
    icon: IconThree,
  },
]

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}
  
function IconTwo() {
  return (
      <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
          d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
          stroke="#FB923C"
          strokeWidth="2"
      />
      <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
          stroke="#FDBA74"
          strokeWidth="2"
      />
      </svg>
  )
}

function IconThree() {
  return (
      <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
      </svg>
  )
}

function IconFour() {
  return (
    <svg fill="#FB923C" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
      viewBox="0 0 512.001 512.001" xml:space="preserve">
    <g>
      <g>
        <path d="M391.363,189.286c-5.805,0-11.484,0.509-17.022,1.459c-4.668-42.943-23.369-86.013-52.921-120.79
          C284.636,26.668,237.165,2.828,187.752,2.828c-49.413,0-96.883,23.841-133.669,67.129C19.713,110.404,0,162.071,0,211.709
          c0,20.322,3.295,34.551,10.368,44.778c5.307,7.671,15.586,16.818,34.417,16.818c15.468,0,33.313-5.956,53.974-12.852
          c12.578-4.198,25.957-8.649,39.947-12.191c-14.246,72.013-23.182,164.438-23.182,184.71c0,41.166,32.401,74.657,72.228,74.657
          c39.827,0,72.228-33.491,72.228-74.657c0-20.272-8.935-112.697-23.183-184.711c13.989,3.541,27.367,7.991,39.944,12.187
          c2.841,0.948,5.633,1.879,8.384,2.782c-9.236,18.952-14.4,39.618-14.4,59.541c0,13.738,2.368,23.561,7.453,30.913
          c4.108,5.939,11.997,13.018,26.257,13.018c10.457,0,21.771-3.776,34.871-8.148c4.487-1.497,9.149-3.048,13.943-4.506
          c-7.603,42.336-12.281,91.716-12.281,103.255c0,28.603,22.608,51.872,50.394,51.872c27.789,0,50.395-23.27,50.395-51.872
          c0-11.539-4.679-60.92-12.281-103.256c4.794,1.458,9.458,3.008,13.944,4.506c13.098,4.371,24.41,8.147,34.87,8.147
          c12.589,0,33.709-5.708,33.709-43.93C512,259.76,460.409,189.286,391.363,189.286z M187.752,474.57
          c-21.599,0-39.171-18.662-39.171-41.6c0-19.972,10.045-120.703,25.145-190.857c9.441-0.815,17.664-0.894,28.051,0
          c15.101,70.154,25.146,170.885,25.146,190.857C226.923,455.909,209.351,474.57,187.752,474.57z M287.205,229.09
          c-17.12-5.712-36.837-12.289-58.289-16.462l-0.064-0.272c-35.826-5.29-45.908-5.359-82.2,0l-0.064,0.273
          c-21.454,4.174-41.172,10.752-58.294,16.467c-17.183,5.735-33.412,11.152-43.509,11.152c-5.455,0-6.481-1.483-7.231-2.566
          c-1.678-2.429-4.497-9.032-4.497-25.973c0-81.309,67.575-175.823,154.696-175.823c83.65,0,149.278,87.136,154.374,166.075
          c-15.01,8.076-28.109,19.512-38.666,32.443C298.319,232.799,292.853,230.975,287.205,229.09z M391.363,476.117
          c-9.56,0-17.337-8.441-17.337-18.815c0-11.16,5.746-68.479,14.146-109.893c2.333-0.085,4.09-0.083,6.384,0
          c8.4,41.415,14.145,98.734,14.145,109.893C408.702,467.678,400.923,476.117,391.363,476.117z M477.829,333.635
          c-5.204-0.184-14.725-3.362-23.942-6.438c-9.524-3.179-20.34-6.782-32.135-9.374l-0.1-0.428c-25.456-3.758-29.092-4.647-60.578,0
          l-0.1,0.428c-11.794,2.592-22.61,6.195-32.133,9.373c-9.218,3.076-18.741,6.254-23.944,6.44
          c-0.472-1.583-1.114-4.847-1.114-10.865c0-47.617,39.695-100.427,87.58-100.427c48.139,0,87.58,52.98,87.58,100.427
          C478.943,328.79,478.3,332.052,477.829,333.635z"/>
      </g>
    </g>
    </svg>
  )
}

const Header = () => {
  const location = useLocation();

  let bg;
  let border;
  let color;
  let divide;
  
  switch (location.pathname) {

    case '/products/fungigro':
      bg = "bg-green-950 sm:bg-opacity-90 backdrop-blur";
      border = "border-green-800 border-opacity-40";
      divide = "divide-green-800 divide-opacity-20"
      color = "text-primary-50"
    break;
    case '/products/mushroom':
      bg = "bg-secondary-50";
      border = "border-nude-100 border-opacity-60";
      divide = "divide-nude-100 divide-opacity-30"
    break;
    case '/products/biomass':
      bg = "bg-black sm:bg-opacity-40 backdrop-blur";
      border = "border-none";
      divide = "divide-nude-100 divide-opacity-30"
      color = "text-white"
    break;
    case '/about-leadfut':
      bg = "bg-[#09141A]";
      border = "border-cyan-800 border-opacity-20";
      divide = "divide-cyan-800 divide-opacity-20"
      color = "text-accent-50"
    break;
    case '/contactus':
      bg = "bg-[#4a4f5b] sm:bg-opacity-40 backdrop-blur";
      border = "border-cyan-100 border-opacity-0";
      divide = "divide-cyan-100 divide-opacity-20"
      color = "text-white"
    break;
    case '/blog':
      bg = "bg-[#e5e1d8]";
      border = "border-nude-500";
      divide = "divide-nude-500 divide-opacity-40"
      color = "text-black"
    break;
    default:
      bg = "bg-[#ebe5d0] sm:bg-nude-50";
      border = "border-nude-100 sm:border-nude-50";
      divide = "divide-nude-100 divide-opacity-50"
      color = "text-black"
  }

  // function handleBookMeetingClick(event) {
  //   event.preventDefault();
  //   Calendly.initPopupWidget({url: 'https://calendly.com/dah4mulah/30min?background_color=e5e1d8&primary_color=2fb34c'});
  // }

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(prevOpen => !prevOpen);
  }

  const bookMeetingMobile = (event) => {
    toggleMenu();
    setTimeout(()=>{
      handleBookMeetingClick(event);
    }, 1000);
  }

  const menuVars = {
    initial: {
      scaleX: 0,
    },
    animate: {
      scaleX: 1,
      transition: {
        // type: "spring",
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0]
      }
    },
    exit: {
      scaleX: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const containerVars = {
    initial: {
      // for when its enters and leaves
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1
      },
      // for when its open
      open: {
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.09,
          staggerDirection: 1
        },
      }

    }
  }
  

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <header className={`${bg} ${border} px-3 sm:px-6 lg:px-10 pt-1.5 sm:py-1.5 border-b w-full fixed top-0 left-0 z-20`}>

        <nav className={`flex justify-between items-center ${color}`}>

          <Link to={'/'}>
            <h1 className="inline-flex items-center font-bold text-xl sm:text-xl tracking-wide uppercase">
                {/* <img src="/images/mushroom-yl.png" className='w-7' alt="" /> */}
                <img src="/images/logo.png" className='w-9 sm:w-12 pt-1' alt="" />
                Leadfut
            </h1>
          </Link>

          <div onClick={toggleMenu} className="bg-black h-9 w-9 sm:h-11 sm:w-11 flex justify-center items-center rounded-full sm:hidden text-white mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
          </div>

          <div className="items-center gap-5 lg:gap-6 text-base lg:text-xl font-light hidden sm:inline-flex">
            <PopoverComp title={'Product'} content={products} handleClick={handleBookMeetingClick} />

            <Link to={'/blog'}>Blog</Link>
            <Link to={'/about-leadfut'}>About us</Link>
            <Link to={'/contactus'}>Contact</Link>

            <PrimBtn onClick={handleBookMeetingClick} title={'Book a meeting'} />
          </div>

        </nav>

        <AnimatePresence>
          {
            open && (
              <motion.div 
                variants={menuVars}
                initial="initial"
                animate="animate"
                exit="exit"
                className={`fixed left-0 top-0 w-full h-screen origin-right ${bg} ${color} py-3`}>
                <div className="flex h-full flex-col">

                  <div className={`flex justify-between items-center border-b px-3 ${border}`}>
                    <Link to={'/'}>
                      <h1 className="inline-flex items-center font-bold text-xl sm:text-xl tracking-wide uppercase">
                        <img src="/images/logo.png" className='w-9 sm:w-12 pt-1' alt="" />
                        Leadfut
                      </h1>
                    </Link>
                    <p onClick={toggleMenu} className="uppercase text-xl pb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-8.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </p>
                  </div>

                  <div className="flex flex-col justify-between h-full">
                      <motion.nav 
                        variants={containerVars}
                        initial='initial'
                        animate="open"
                        exit={'initial'}
                        className={`flex flex-col justify-start items-start text-md gap-6 mt-5 divide-y-2 w-full ${divide}`}
                      >
                        <div className="flex flex-col items-start justify-between gap-10 w-full px-5">
                          <p className="">Product</p>
                          <ul className='space-y-4 text-xl'>
                            <li onClick={toggleMenu}><Link to={'/products/fungigro'}>Fungigro</Link></li>
                            <li onClick={toggleMenu}>
                              <Link to={'/products/mushroom'}>Edible & Medicinal mushroom</Link>
                            </li>
                            <li onClick={toggleMenu}>
                              <Link to={'/products/biomass'}>Biomass Solutions</Link>
                            </li>
                            <li onClick={bookMeetingMobile}>Consultancy</li>
                          </ul>
                        </div>
                        <div className='w-full px-5 pt-7'>
                          <ul className='space-y-4 text-xl'>
                            <li onClick={toggleMenu}><Link to={'/about-leadfut'}>About us</Link></li>
                            <li onClick={toggleMenu}><Link to={'/contactus'}>Contact</Link></li>
                            <li onClick={toggleMenu}><Link to={'/blog'}>Blog</Link></li>
                            <li onClick={bookMeetingMobile}>
                              Book a meeting
                            </li>
                          </ul>
                        </div>
                      </motion.nav>
                  </div>

                </div>
              </motion.div>
            )
          }
        </AnimatePresence>
      </header>
    </motion.div>
  )
}

export default Header

