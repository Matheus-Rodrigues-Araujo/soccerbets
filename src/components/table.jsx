import Image from "next/image"

export default function Table({tableHeadData, tableData}){
    return(
        <div className="flex flex-col w-4/5 " style={{marginInline: 'auto'}} >
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="bg-black border-b font-medium dark:border-neutral-500">
                  <tr>

                  {tableHeadData && tableHeadData.map(item => (
                    <th scope="col" className="px-6 py-4">{item}</th>
                  ))}
                  </tr>
                  {/* <tr>
                    <th scope="col" className="px-6 py-4">Flag</th>
                    <th scope="col" className="px-6 py-4">First</th>
                    <th scope="col" className="px-6 py-4">Last</th>
                    <th scope="col" className="px-6 py-4">Handle</th>
                  </tr> */}
                </thead>
                <tbody className='bg-black' >
                <tr
                    className="border-b transition duration-300 ease-in-out bg-white text-gray-800 hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-yellow-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      <Image alt="" src={'https://crests.football-data.org/764.svg'} width={25} height={25} />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Campeonato Brasileiro Série A</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
    )
}