import Layout from '../components/layout'
import Head from 'next/head'
import '../styles/globals.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Add New User App</title>
        <meta name="description" content="This is a sample task for creating and saving user into JSON file." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer 
        position='top-right'
        theme='colored'
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeButton
        rtl={false}
        draggable
      />
      <Layout className="h-screen w-screen font-sans">
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
