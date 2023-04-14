import Navbar from './navbar'


export default function Layout({ children }) {
  return (
    <>
        <div className='max-w-screen-xl mx-auto px-4 py-15'>
            <Navbar />
            <main class="salut">{children}</main>
        </div>
    </>
  )
}