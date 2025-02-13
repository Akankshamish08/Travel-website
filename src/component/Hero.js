import React from 'react'

function Hero() {
  return (
    <div className='relative w-[100%] h-[88vh]'>
     <div className='absolute top-0 left-0 w-[100%] h-[100%] bg-blue-800 opacity-40'>

     </div>
     <img src='https://notsocomplicated.com/wp-content/uploads/2021/06/simon-english-48nerZQCHgo-unsplash.jpg' autoPlay muted loop preload='metadata' className='w-[100%] h-[100%] object-cover'/>      
     <div className='absolute z-[100] w-[100%] h-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <div className='flex items-center justify-center flex-col w-[100%] h-[100%]'>
            <div>
                <h1 className='text-[25px] mb-[1rem] md:mb-[0] text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem] text-white font-bold uppercase'>Lets Enjoy the Journey</h1>
              <p></p>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Hero
