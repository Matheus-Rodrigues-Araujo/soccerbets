"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import image1 from '../assets/image1.jpg'
import { useState, useEffect } from 'react'
// import Navbar from '../components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  
  return(
    <main>
      {/* <Navbar/> */}
      <section className='relative bg-gray-900 h-screen flex justify-center items-start'  >
          <Image className='absolute top-0 left-0  md:shrink-0' src={image1} alt='Decoration image' />
        
        <div className='absolute z-10 bg-yellow-500  flex flex-col justify-items items-center gap-4 rounded-md p-12'>
          <h1 className='text-center inline text-gray-100 rounded-md text-5xl bg-gray-800 p-3 font-bold uppercase'>
            SoccerBets
          </h1>
          <h2 className="font-bold text-md text-2xl text-gray-800 p-3" >Play with your friends and family</h2>
          
          <div className='w-1/2' >
            <p className="font-bold text-md text-2xl text-gray-800 w text-justify"  >
            Are you a die-hard football enthusiast seeking an all-in-one platform for the latest updates, insightful analysis, and interactive gaming experiences? Look no further than SoccerBets – your go-to app for all things football!
            </p>
          </div>

          <div className='grid grid-cols-2 gap-4' >
            <Link href="/register" className="uppercase text-center text-2xl bg-gray-800 hover:bg-green-600 p-5 w-100 rounded-md ">
              Register
            </Link>
            <Link href="/login" className="uppercase text-2xl text-center bg-gray-800 hover:bg-green-600 p-5 w-100 rounded-md ">
              Login
            </Link>
          </div>
        </div>
    
      </section>

      <section className="relative information bg-yellow-500 flex justify-center items-start h-[50vh]" style={{backgroundColor: 'rgb(17 23 36)'}} >
            <div className='flex flex-col gap-5' >
              <h3 className="text-yellow-400 text-5xl font-bold text-center" >Explore our content</h3>
              <p className="text-yellow-400 text-2xl text-center mb-8" >Click and know about our services</p>
              <div className='grid grid-cols-3 gap-4' >
                <a href='#updates' className='content-btn bg-yellow-400 p-8 rounded-md text-lg cursor-pointer hover:bg-gray-800'>
                  <p className="text-center text-gray-900 font-bold"> Updates</p>
                </a>
                <a href='#analysis' className='content-btn bg-yellow-400 p-8 rounded-md text-lg cursor-pointer hover:bg-gray-800'>
                  <p className="text-center text-gray-900 font-bold">Analysis</p>
                </a>
                <a href='#games' className='content-btn bg-yellow-400 p-8 rounded-md text-lg cursor-pointer hover:bg-gray-800'>
                  <p className="text-center text-gray-900 font-bold">Games</p>
                </a>
                <a href='#community' className='content-btn bg-yellow-400 p-8 rounded-md text-lg cursor-pointer hover:bg-gray-800'>
                  <p className="text-center text-gray-900 font-bold" >Community</p>
                </a>
                <a href='#experience' className='content-btn bg-yellow-400 p-8 rounded-md text-lg cursor-pointer hover:bg-gray-800'>
                  <p className="text-center text-gray-900 font-bold" >Experience</p>
                </a>
                <a href='#information' className='content-btn bg-yellow-400 p-8 rounded-md text-lg cursor-pointer hover:bg-gray-800'>
                  <p className="text-center text-gray-900 font-bold" >Information</p>
                </a>
              </div>
            </div>
      </section>

      {/* Seção 1: Stay Ahead with Live Updates */}
      <section id="updates" className=" bg-yellow-400 p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Ahead with Live Updates</h2>
          <p className="text-gray-700 text-lg mb-8">
            SoccerBets keeps you in the loop with real-time updates on matches, scores, player statistics, and more. Whether it's the nail-biting moments of a league showdown or the global stage of international competitions, you'll have the information at your fingertips.
          </p>
        </div>
      </section>

      {/* Seção 2: In-Depth Analysis and Commentary */}
      <section id='analysis' className="p-8" style={{backgroundColor: 'rgb(17 23 36)'}} >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">In-Depth Analysis and Commentary</h2>
          <p className="text-gray-100 text-lg mb-8">
            Get ready to dive deep into the world of football with our expert analysis and commentary. Our team of seasoned pundits provides you with thought-provoking insights, tactical breakdowns, and player performance assessments, ensuring you're always in the know about the beautiful game.
          </p>
        </div>
      </section>

      {/* Seção 3: Predict, Play, Win */}
      <section id='games' className="bg-yellow-400 p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Predict, Play, Win</h2>
          <p className="text-gray-700 text-lg mb-8">
            But that's not all – SoccerBets also brings the thrill of betting and gaming right to your device. Engage in a variety of football-related games where you can make predictions, set up fantasy teams, and compete with fellow enthusiasts. Test your football knowledge and strategy against a global community for a chance to win exciting prizes.
          </p>
        </div>
      </section>

      {/* Seção 4: Connect with Fellow Fans */}
      <section id="community"  className="p-8" style={{backgroundColor: 'rgb(17 23 36)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Connect with Fellow Fans</h2>
          <p className="text-gray-100 text-lg mb-8">
            Join the vibrant community of football fans on SoccerBets. Discuss matches, share opinions, and engage in lively debates with fans from around the world. From transfer rumors to unforgettable goals, there's always something to talk about.
          </p>
        </div>
      </section>

      {/* Seção 5: Customized Experience */}
      <section id="experience" className="bg-yellow-400 p-8" >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Customized Experience</h2>
          <p className="text-gray-700 text-lg mb-8">
            Tailor your SoccerBets experience to your preferences. Follow your favorite teams and players to receive personalized updates and recommendations. Whether you're a fan of the Premier League, La Liga, Serie A, or any other league, we've got you covered.
          </p>
        </div>
      </section>

      {/* Seção 6: Never Miss a Moment */}
      <section id='information' className="bg-white p-8" style={{backgroundColor: 'rgb(17 23 36)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss a Moment</h2>
          <p className="text-gray-100 text-lg mb-8">
            With push notifications and personalized alerts, you'll never miss a crucial moment again. Whether it's a last-minute goal, a game-changing substitution, or breaking news from the world of football, SoccerBets ensures you're always in the loop.
          </p>
        </div>
      </section>


    </main>
  )

}


