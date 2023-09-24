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
    const { matches } = data
    setMatches(matches)
    // console.log(data)
  }

  useEffect(()=>{
    getMatches()
  }, [])
  

  return(
   <Layout children={
    <div className='w-full' >
      <div>
        <div className='flex justify-center flex-col items-star' >
          <h1 className='text-center inline text-green-400 rounded-md text-lg p-3 font-bold uppercase'>Welcome back, @user2023</h1>
        </div> 
      </div>

      <div class="flex flex-col w-4/5 " style={{marginInline: 'auto'}} >
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden p-3 bg-black ">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="bg-yellow-400 text-black border-b font-medium dark:border-neutral-500">
                 
                  <tr>
                    <th scope="col" class="px-6 py-4">Date/Status</th>
                    <th scope="col" class="px-6 py-4">Home Team</th>
                    <th scope="col" class="px-6 py-4">Away Team</th>
                    <th scope="col" class="px-6 py-4">Score</th>
                  </tr>
                
                </thead>
                <tbody className='bg-black' >
                  {
                    matches && matches.map(
                      item => (
                        <tr onClick={()=>handleRowClick()} className="cursor-pointer border-b transition duration-300 ease-in-out bg-white text-gray-800 hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-yellow-300">
                          
                          <td className="whitespace-nowrap px-6 py-4 font-medium">{item.status === 'FINISHED' ? <p className='inline p-2 rounded-full bg-green-400' >{item.status}</p> : <p className='inline p-2 rounded-full bg-red-400' >{item.status}</p>}</td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <div className=' flex flex-cols items-center gap-1 ' >
                              <Image src={item['homeTeam'].crest} alt={item['homeTeam'].name} width={25} height={25} />
                              {item['homeTeam'].name}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <div className=' flex flex-cols items-center gap-1 ' >
                              <Image src={item['awayTeam'].crest} alt={item['homeTeam'].name} width={25} height={25} />
                              {item['awayTeam'].name ? item['awayTeam'].name : <></>}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {item.score.fullTime ? <>{item.score.fullTime.home} : {item.score.fullTime.away}</> : <>-:-</>}
                          </td>
                        </tr>
                      )
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

  </div>

  } />
  )

}


