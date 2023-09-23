import Navbar from './navbar'
// import Footer from './footer'
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='bg-gray-400 min-h-screen flex flex-start p-5' style={{backgroundColor: 'rgb(17 23 36)'}} >
        {children}
      </main>
    </>
  )
}