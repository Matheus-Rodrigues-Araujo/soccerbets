import Link from "next/link"

export default function Logo(){
    return(
        <div className="flex flex-shrink-0 items-center">
            <Link className='text-gray-100 rounded-md text-md hover:bg-blue-800  bg-gray-800 p-1 font-bold uppercase'  href={'/'} >Soccerbets</Link>
        </div>
    )
}