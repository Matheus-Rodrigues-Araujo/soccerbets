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
        <div className='flex justify-center flex-col items-star w-6/12 mx-auto' >
          <h2 className=" text-green-300 rounded-md text-2xl text-center p-3 font-bold uppercase">Choose your favorite championship and explore!  <span className='text-yellow-500' >ID= {router.query.id}</span></h2>      
          
        </div>
      </div>
      <div className='flex justify-center items-center bg-white w-6/12 mx-auto rounded-md' >
    
        <div className='grid grid-cols-2  items-start justify-items-center p-4 gap-5' >
          
          <img alt="Barcelona" src={"https://4.bp.blogspot.com/-fGaXTFJ5irY/W60yuIRN7EI/AAAAAAAAA68/HGWzU8pZSOA-e3iD3rSAdPQTP9nnUdnrQCLcBGAs/s1600/Nuevo%2Bescudo%2Bdel%2BBar%25C3%25A7a.png"} className='h-28 object-contain  mx-auto' />
          <div>
            <div className='grid grid-cols-2 items-center justify-items-center' >
              <img alt="Barcelona" src={"https://th.bing.com/th/id/R.9d7997e4e13b1c737217f8d1a3f1c6f5?rik=2tCsgtAE5w6xoA&riu=http%3a%2f%2fechesters.co.uk%2fimages%2fposts%2fflag-of-spain.png&ehk=t0cUSAxXePoXOokg%2bPWqCFoxqJQ%2bXhrIA3V%2b9QQEeoM%3d&risl=&pid=ImgRaw&r=0"} className='h-12 w-12 object-contain  mx-auto' />
              <div className='grid items-center justify-items-center' >
                <p className='text-black font-bold' >Brazil</p>
                <p className='text-gray-900 font-bold' >BRL</p>
              </div>
            </div>

            <p className='text-black' >Name: Campeonato Brasileiro Série A</p>
            <p className='text-black' >Code: BSA</p>

          </div>
            
          
        </div>
      </div>
  </div>

  } />
  )

}


