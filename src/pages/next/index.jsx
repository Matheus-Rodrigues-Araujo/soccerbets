"use client"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Layout from '@/components/nextLayout'

export default function Next() {
  const router = useRouter()
  const [competitionsData, setCompetitionsData] = useState([])
  const [isLoading, setLoading] = useState(true)

  const handleRowClick = () => {
    router.push('#')
  }

  const getCompetitions = async () =>{
    const response = await fetch('../api/competitions')
    const data = await response.json()
    const {competitions} = data
    setCompetitionsData(competitions)
    setLoading(false)
  }

  useEffect(()=>{
    getCompetitions()
  }, [])

  return(
    <Layout children={
      <div className='w-full h-scren' >
        <div>
          <div className='flex justify-center flex-col items-star' >
            <h2 className=" text-green-300 rounded-md text-2xl text-center p-3 font-bold uppercase">Choose your favorite championship and explore!</h2>      
            
          </div>
        </div>

        
        <div className='flex justify-center items-center bg-white w-10/12 mx-auto rounded-md' >
      
          <div className='grid grid-cols-2 md:grid-cols-4 items-center justify-items-center p-4 gap-5' >
            {
              competitionsData && competitionsData.length > 1 && competitionsData.map(item => (
                <Link href="#" className='w-full p-2 h-32 ring-1 rounded-md ring-gray-200 cursor-pointer grid justify-item-center items-center hover:bg-yellow-500'>
                  <img alt={item.name} src={item.emblem} className='h-28 object-contain  mx-auto' />

                </Link>
              ))
            }
          </div>
        </div>
      </div>
    }
  />)
}


