"use client"
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Layout from '@/components/nextLayout'
import imagem3 from '@/assets/img_teste.jpg'
// import axios from 'axios'

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
    <div className='w-full' >
      <div>
        <div className='flex justify-center flex-col items-star' >
        <h1 className='text-center inline text-gray-100 rounded-md text-lg p-3 font-bold uppercase'>Welcome back, @user2023</h1>
          <h2 className=" text-gray-100 rounded-md text-2xl text-center p-3 font-bold uppercase">Choose your favorite championship to start!</h2>      
          
          {/* <div className='flex justify-center' >
            <input type="text" name="" id="" placeholder='Search...' className='p-1 w-4/12 text-yellow-400 bg-gray-800 ring-1 ring-yellow-400' />
          </div> */}
        </div>

      </div>

      <div class="flex flex-col w-4/5 " style={{marginInline: 'auto'}} >
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="bg-black border-b font-medium dark:border-neutral-500">
                 
                  <tr>
                    <th scope="col" class="px-6 py-4">Emblem</th>
                    <th scope="col" class="px-6 py-4">Id</th>
                    <th scope="col" class="px-6 py-4">Name</th>
                    <th scope="col" class="px-6 py-4">Code</th>
                  </tr>
                
                </thead>
                <tbody className='bg-black' >
                  {
                    competitionsData.map(
                      item => (
                        <tr onClick={()=>handleRowClick()} className="cursor-pointer border-b transition duration-300 ease-in-out bg-white text-gray-800 hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-yellow-500">
                          
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            <Image alt={item.name} src={item.emblem} width={25} height={25} />
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">{item.id}</td>
                          <td className="whitespace-nowrap px-6 py-4">{item.name}</td>
                          <td className="whitespace-nowrap px-6 py-4">{item.code}</td>
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


