import React from "react";
import {Navbar,MobileNav,Typography,Button,IconButton,} from "@material-tailwind/react";
import { FaHome, FaQuestionCircle, FaPhoneAlt } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdFindInPage } from "react-icons/md";
import { motion } from "framer-motion"
import { Link, NavLink } from "react-router-dom";

 function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
  const user = true
  const menuClass = "flex items-center gap-x-2 font-medium  cursor-pointer hover:shadow-xl bg-white rounded-lg p-2"
  const activeMenuClass = "flex items-center gap-x-2 font-medium text-white cursor-pointer hover:shadow-xl bg-[#022b3a] rounded-lg p-2"
  const ulClass = "mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-end lg:gap-6"
 
  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false), ); }, []);
 
  const navList = (
    <ul className={ulClass}>
      <motion.div initial={{ y: "-100%" }} animate={{ y: "0%" }} transition={{ duration: .3}}>
      <NavLink to='/' className={({ isActive, isPending,  }) =>isPending ? "pending" : isActive ? activeMenuClass : menuClass}>
        <FaHome />Home
      </NavLink>
      </motion.div>

      <motion.div initial={{ y: "-100%" }} animate={{ y: "0%" }} transition={{ duration: .4}}>
      <NavLink to='/lost' className={({ isActive, isPending,  }) =>isPending ? "pending" : isActive ? activeMenuClass : menuClass}>
       <FaMagnifyingGlass />
       Lost
      </NavLink>
      </motion.div>

      <motion.div initial={{ y: "-100%" }} animate={{ y: "0%" }} transition={{ duration: .5}}>
      <NavLink to='/' className={({ isActive, isPending,  }) =>isPending ? "pending" : isActive ? activeMenuClass : menuClass}>
       <MdFindInPage />
       Found
      </NavLink>
      </motion.div>

      <motion.div initial={{ y: "-100%" }} animate={{ y: "0%" }} transition={{ duration: .6}}>
      <NavLink to='/' className={({ isActive, isPending,  }) =>isPending ? "pending" : isActive ? activeMenuClass : menuClass}>
      <FaQuestionCircle />
       How It Works
      </NavLink>
      </motion.div>

      <motion.div initial={{ y: "-100%" }} animate={{ y: "0%" }} transition={{ duration: .7}}>
      <NavLink to='/' className={({ isActive, isPending,  }) =>isPending ? "pending" : isActive ? activeMenuClass : menuClass}>
        <FaPhoneAlt />
       Contact Us
      </NavLink>
      </motion.div>
    </ul>
  );
 
  return (
    <Navbar className="bg-[#bfdbf7] border-0 rounded-none  mx-auto max-w-full px-4 py-2 lg:px-8 lg:py-4 overflow-hidden">
      <div className=" mx-auto flex items-center justify-between text-blue-gray-900">

        <motion.div initial={{scale:.2, x:-200}} animate={{scale: 1, x:0}} transition={{duration: .6}}>
        <Typography  as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium text-xl text-[#022b3a]">
          <span className="text-[#022b3a] text-2xl">L</span>ost<span className="text-[#022b3a] text-2xl">N</span>foun<span className="text-[#022b3a] text-2xl">D</span>
        </Typography>
        </motion.div>
        
        {/* search, dashboard & login/signUp */}
        <div className="flex  justify-end gap-10 items-center text-[#022b3a]">

        <div className="hidden lg:block">{navList}</div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 1}} className="items-center hidden gap-x-2 lg:flex">
          <div className="relative flex w-full gap-2 md:w-max">
            <div className="relative h-10 w-full  min-w-[288px]">
              <input type="search" placeholder="Lost something?"
                className="peer h-full w-full rounded-[7px] border bg-white border-blue-gray-200 border-t-transparent !border-t-blue-gray-300 bg-transparent px-3 py-2.5 pl-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder:text-blue-gray-300 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-blue-gray-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
              <label
                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
            </div>
            <div className="!absolute left-3 top-[13px]">
              <svg width="13" height="14" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                  fill="#CFD8DC"></path>
                <path
                  d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                  stroke="#CFD8DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
          </div>
          <Button variant="text" size="sm" className="hidden lg:inline-block bg-white text-[#022b3a] py-3 px-6">
                <span>Search</span>
              </Button>
            </motion.div>

        <div>
        {
              !user?
              <div className="flex items-center gap-x-1">
              <Button variant="text" size="sm" className="hidden lg:inline-block bg-white text-[#022b3a] py-3 px-6">
                <span>Log In</span>
              </Button>
              <Button variant="gradient"size="sm"className="hidden lg:inline-block text-white bg-[#022b3a] py-3 px-6">
                <span>Sign in</span>
              </Button>
            </div>:
            <div className="">
              <motion.img initial={{scale:.2, x:200}} animate={{scale: 1, x:0}} transition={{duration: .6}} className="w-[50px] rounded-full " src="https://i.ibb.co/F6tKccF/image.png" alt="" />
            </div>
              }
        </div>
        </div>
        
        <IconButton variant="text" className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden" ripple={false} onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg> )}
        </IconButton>
      </div>

      <MobileNav open={openNav}>
        <div className="container lg:hidden mx-auto text-[#022b3a]">
          {navList}

          {!user? 
          <div className="flex items-center gap-x-1">
          <Button fullWidth variant="text" size="sm" className="bg-[#022b3a]">
            <span>Log In</span>
          </Button>
          <Button fullWidth variant="gradient" size="sm" className="bg-[#022b3a]">
            <span>Sign in</span>
          </Button>
        </div>:
        <div></div>}

        </div>
      </MobileNav>
      
    </Navbar>
  );
}

export default NavbarDefault