import Layout from '../comps/Layout'
import Navbar from '../comps/Navbar';
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
