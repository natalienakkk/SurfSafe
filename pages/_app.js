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
// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <main style={{ paddingTop: '60px' }}>
//         {/* Your main content goes here, add padding to top to avoid overlap with the fixed AppBar */}
//       </main>
//     </div>
//   );
// }
export default App
