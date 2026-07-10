import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, Calendar, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {

    const navigate = useNavigate()

  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg-px-36 bg-[url("/backgroundImage.png")]
    bg-cover bg-center h-screen'>

      <img src={assets.marvelLogo} alt="" className="max-h-11 lg:h-11 mt-20"/>

      <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110'>Spider-Man: <br /> Brand New Day</h1>

      <div className='flex items-center gap-4 text-white-300'>
        <span className='md:text-[25px]'>Action | Adventure | Sci-Fi</span>
        <div className='flex items-center gap-1'>
            <CalendarIcon className='w-6.5 h-6.5'/> 2026
        </div>
        <div className='flex items-center gap-1'>
            <ClockIcon className='w-6.5 h-6.5'/> 2h 25m
        </div>
      </div>
      <p className='max-w-md text-white-300 md:text-[15px]' style={{
    textShadow: `
      -1px -1px 0 #551818,
       1px -1px 0 #551818,
      -1px  1px 0 #551818,
       1px  1px 0 #551818`,}}>
        Peter Parker devotes his life to protecting New York City as a full-time Spider-Man. 
        But as the demands on him intensify, the pressure sparks a surprising physical evolution that threatens his existence, 
        even as a strange new pattern of crimes gives rise to one of the most powerful threats he's ever faced.
        </p>
        <button onClick={()=> navigate('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull 
        transition rounded-full font-medium cursor-pointer'>
          Explore Movies
          <ArrowRight className='w-5 h-5'/>
        </button>
    </div>
  )
}

export default HeroSection
