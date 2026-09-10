import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background3D from './components/Background3D'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import LoadingScreen from './components/LoadingScreen'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-paper selection:bg-cobalt relative cursor-none md:cursor-none">
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Background3D />
      <BackToTop />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <About />
          <Projects />
          <Services />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
