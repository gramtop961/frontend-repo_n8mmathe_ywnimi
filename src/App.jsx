import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Solutions from './components/Solutions'
import ValueAndEvidence from './components/ValueAndEvidence'
import Author from './components/Author'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple top nav */}
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-xl">Nutrition Book</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#problem" className="hover:text-gray-900">Problem</a>
            <a href="#solution" className="hover:text-gray-900">Solution</a>
            <a href="#evidence" className="hover:text-gray-900">Evidence</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          </nav>
          <a href="#pricing" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold">Buy</a>
        </div>
      </header>

      <main>
        <Hero />
        <PainPoints />
        <Solutions />
        <ValueAndEvidence />
        <Author />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>

      <footer className="py-10 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Nutrition Book. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
