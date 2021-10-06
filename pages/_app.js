import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
// import '../styles/globals.css'
import '../css/mystyles.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  ) 
}

export default MyApp
