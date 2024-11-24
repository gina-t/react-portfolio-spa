import { Link } from 'react-router-dom'
import React from 'react'
import hero from '../assets/operating-theatre.jpg'
import logoCode from '../assets/code.svg'
import logoBeat from '../assets/beat.svg'

// eslint-disable-next-line react/prop-types
const Header = ({ title='Dr Gina Tsanaktsidis', subtitle='Ophthalmologist and Software Developer'}) => {
  return (
  <div className="bg-gray-900">
    {/* hero image */}
    <div className="relative isolate overflow-hidden pt-12 flex items-center justify-center">
      <img src={hero} alt="hero image" className="absolute inset-0 -z-10 size-full object-cover opacity-10"></img>
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              My Story 
                <Link to="/about" className="font-semibold text-white ml-5">
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  Read more
                </Link>
              </div>
          </div>
          {/* hero heading */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-x-4">
              <img className="h-12 w-auto" src={logoBeat} alt="logo" />
              <h1 className="text-balance text-5xl font-medium tracking-tight text-white sm:text-7xl">
              {title}
              </h1>
              <img className="h-12 w-auto" src={logoCode} alt="logo" />
            </div>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
              {subtitle}
            </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link to="/portfolio" className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                  Portfolio
                </Link>
                <Link to="/portfolio" className="text-sm/6 font-semibold text-white">
                Read more
                </Link>
              </div>
          </div>
        </div>
      </div>
      {/* decorative background element */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header