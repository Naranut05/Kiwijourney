import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Menu} from 'lucide-react';





function Navbar() {
    return (
<nav className="bg-[#faf9f7] px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
            <img src="./src/assets/logo.png" alt="logo" />
        </div>

        {/* Buttons */}
        <div className="flex md:hidden items-center space-x-3">
         <Menu/>
        </div>

        <div className="hidden md:flex items-center space-x-3">
          <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-100 transition">
            Log in
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
            Sign up
          </button>
        </div>
      </div>
    </nav>
    )
}



function HeroSection() {
    return (
      <section className="bg-[#faf9f7] rounded-[40px] px-6 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left - Title & Subtitle */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              Stay Informed, <br /> Stay Inspired
            </h1>
            <p className="mt-4 text-gray-500 text-sm md:text-base">
              Discover a World of Knowledge at Your Fingertips.
              Your Daily Dose of Inspiration and Information.
            </p>
          </div>
  
          {/* Middle - Image */}
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
              alt="Author"
              className="w-60 h-auto rounded-lg object-cover"
            />
          </div>
  
          {/* Right - Author Info */}
          <div>
            <div className="text-sm text-gray-500">~Author</div>
            <h2 className="text-lg font-bold text-gray-900">Thompson P.</h2>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              I am a pet enthusiast and freelance writer who specializes in animal behavior and care.
              With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.
            </p>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              When I’m not writing, I spend time volunteering at my local animal shelter,
              helping cats find loving homes.
            </p>
          </div>
        </div>
      </section>
    );
  }




function App() {


    return (
        <>
           <Navbar />
           <HeroSection />

        </>
    )
}

export default App
