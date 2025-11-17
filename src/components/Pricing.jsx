export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="p-8 bg-white rounded-2xl border shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get the system</h2>
            <p className="mt-3 text-gray-700">Instant digital download. Read today.</p>
            <div className="mt-6">
              <div className="text-5xl font-extrabold text-gray-900">$29</div>
              <p className="text-gray-600">One-time payment. Lifetime updates.</p>
            </div>
            <a href="#checkout" className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors w-full md:w-auto">Buy now</a>
            <p className="mt-3 text-sm text-gray-500">30-day money-back guarantee.</p>
          </div>

          <div className="p-8 bg-white rounded-2xl border">
            <h3 className="text-2xl font-semibold text-gray-900">Your risk-free guarantee</h3>
            <p className="mt-3 text-gray-700">
              Try the habits for 30 days. If you don't feel better and see progress,
              email me and get a full refund. No questions.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Clear steps to start day one</li>
              <li>• Easy recipes and shopping lists</li>
              <li>• Habit tracker and review</li>
              <li>• Updates included forever</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
