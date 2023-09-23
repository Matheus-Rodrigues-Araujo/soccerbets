"use client"
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Layout from '@/components/nextLayout'
import Link from 'next/link'
import imagem3 from '@/assets/img_teste.jpg'
// import axios from 'axios'

export default function Next() {
  // const router = useRouter()
  const [matches, setMatches] = useState([])
  // const [isLoading, setLoading] = useState(true)

  const handleRowClick = () => {
    router.push('#')
  }

  // const getCompetitions = async () =>{
  //   const response = await fetch('../api/competitions')
  //   const data = await response.json()
  //   const {competitions} = data
  //   setCompetitionsData(competitions)
  //   setLoading(false)
  // }

  const getMatches = async () => {
    const response = await fetch('../api/matches')
    const data = await response.json()
    setMatches(data)
    console.log(data)
  }

  useEffect(()=>{
    getMatches()
  }, [])
  

  return(
   <Layout children={
    <div className='w-full' >
      <div>
        <div className='flex justify-center flex-col items-star' >
          <h1 className='text-center inline text-gray-100 rounded-md text-lg p-3 font-bold uppercase'>Welcome back, @user2023</h1>
            
            {/* <div className='flex justify-center' >
              <input type="text" name="" id="" placeholder='Search...' className='p-1 w-4/12 text-yellow-400 bg-gray-800 ring-1 ring-yellow-400' />
            </div> */}
        </div>

        {/* <div>
            <Link href="#" alt="something"> Matches</Link>
        
        </div> */}

      </div>

     
  </div>

  } />
  )

}


