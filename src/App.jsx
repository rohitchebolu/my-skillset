import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'
import Approach from './components/Approach'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Approach />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
