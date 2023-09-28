// "use client"
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
// import { useState, useEffect } from 'react'
import Layout from '@/components/nextLayout'

export default function Next({teamData}) {
  const router = useRouter()
  const { id } = router.query

  const handleRowClick = (linkId) => {
    router.push(`/next/competitions/teams/${linkId}`)
  }

  return(
     <Layout children={
      <div className='w-full min-h-screen bg-white' >
      
        <div className='flex justify-evenly items-center gap-0' >
          <div className='w-4/12 mt-5' >
            <img alt={teamData.name} src={teamData.crest} className='h-30 object-contain  mx-auto md:h-80 ' />
          </div>
  
          <div className='w-4/12' >
            <div className='grid justify-items-center'>
              <img alt="Barcelona" src={"https://th.bing.com/th/id/R.9d7997e4e13b1c737217f8d1a3f1c6f5?rik=2tCsgtAE5w6xoA&riu=http%3a%2f%2fechesters.co.uk%2fimages%2fposts%2fflag-of-spain.png&ehk=t0cUSAxXePoXOokg%2bPWqCFoxqJQ%2bXhrIA3V%2b9QQEeoM%3d&risl=&pid=ImgRaw&r=0"} 
                    className='object-contain  mx-auto h-20 w-20 md:h-20' />
                    <p className='text-black' >{teamData.area.name} - {teamData.area.code}</p>
              </div>
            </div>
        </div>
  
        <div className='text-black' >
          <h2 className='rounded-md text-2xl text-center p-3 font-bold uppercase' >Teams</h2>
        <div class="flex flex-col w-4/5 " style={{marginInline: 'auto'}} >
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden p-3 ">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="bg-indigo-500 uppercase  text-white border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">Id</th>
                    <th scope="col" class="px-6 py-4">Name</th>
                    <th scope="col" class="px-6 py-4">TLA</th>
                    <th scope="col" class="px-6 py-4">Founded</th>
                  </tr>
                </thead>
                {/* <tbody className='bg-black' >
                  {
                    teamsData && 
                    teamsData
                    .map(
                      item => (
                        <tr 
                        
                         className=" border-b transition duration-300 ease-in-out bg-white text-gray-800 hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-gray-800 hover:text-white">
                          
                          <td className="whitespace-nowrap px-6 py-4 font-medium">{item.id}</td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <div className=' flex flex-cols items-center gap-1 ' >
                              <Image src={item.crest} alt={item.name} width={25} height={25} />
                              {item.name}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <div className=' flex flex-cols items-center gap-1 ' >
                              {item.tla}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {item.founded}
                          </td>
                        </tr>
                      )
                    )
                  }
                </tbody> */}
              </table>

            </div>
          </div>
        </div>
      </div>
        </div>
      // </div>

    } />
    )
    
};

 

export const getServerSideProps = async({params}) =>{
  const { id } = params
  const token = process.env.API_TOKEN

  try {
    const response = await fetch(
      `http://api.football-data.org/v4/teams/${id}`, 
      {
          headers: {
          'X-Auth-Token': token
      }
  })
  
  if(!response.ok) throw new Error('Error to fetch teams data')

  const data = await response.json()
//   const {teams, season, competition } = data
    console.log(data)
  return {
    props: {
      teamData: data,
    //   seasonData: season,
    //   competitionData: competition
      
    }
  }

  } catch (error) {
    console.error('Error to fetch teams data', error)

    return {
      props: {
        teamData: []
      }
    }
  }


}

            