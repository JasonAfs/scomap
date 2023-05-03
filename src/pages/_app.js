import '@/styles/globals.css'
import { SessionProvider as AuthProvider } from 'next-auth/react';


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (

    <>
     
        <Component {...pageProps} />  
     
        
    </>
    
  
  
  
  
  ) 
}

export default MyApp;