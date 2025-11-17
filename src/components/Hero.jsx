export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-sky-50" />
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
          Evidence-based nutrition
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Eat smarter. Feel better. Keep results.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          A simple system to build habits that work in real life. No fads. No fluff. Just what moves the needle.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors">
            Get the book
          </a>
          <a href="#evidence" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold transition-colors">
            See the proof
          </a>
        </div>
        <p className="mt-3 text-sm text-gray-500">Read in 90 minutes. Apply in days. Benefit for years.</p>
      </div>
    </section>
  )
}
