export default function ValueAndEvidence() {
  const values = [
    "Meal templates for busy days",
    "Protein, fiber, and calorie targets",
    "Shopping lists and swaps",
    "Restaurant and travel guide",
    "Habit tracker and weekly review",
  ]

  const studies = [
    {
      src: "https://images.unsplash.com/photo-1604480132715-bd70038b74df?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXZWlnaHQtbG9zcyUyMG1haW50ZW5hbmNlJTIwd2l0aCUyMGJlaGF2aW9yfGVufDB8MHx8fDE3NjM0MDQwMzF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
      title: "Weight-loss maintenance with behavior support",
      insight: "People keep more weight off when they track habits and get simple rules.",
    },
    {
      src: "https://images.unsplash.com/photo-1604480132715-bd70038b74df?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXZWlnaHQtbG9zcyUyMG1haW50ZW5hbmNlJTIwd2l0aCUyMGJlaGF2aW9yfGVufDB8MHx8fDE3NjM0MDQwMzF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
      title: "Low-fat vs low-carb without calorie counting",
      insight: "Both work when protein and whole foods are emphasized. Restriction alone isn't the key.",
    },
    {
      src: "https://www.bmj.com/content/361/bmj.k2234",
      title: "Fiber intake and health outcomes",
      insight: "Higher fiber improves weight, blood sugar, and satiety.",
    },
  ]

  return (
    <section id="evidence" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What you get</h2>
            <ul className="mt-6 space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                  <span className="text-gray-700">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Proof it works</h3>
            <p className="text-gray-600 mt-2">Real data from peer‑reviewed research.</p>
            <div className="mt-6 space-y-4">
              {studies.map((s) => (
                <a key={s.src} href={s.src} target="_blank" rel="noreferrer" className="block p-4 rounded-lg border hover:border-emerald-600 hover:bg-emerald-50 transition-colors">
                  <p className="text-sm font-semibold text-gray-900">{s.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{s.insight}</p>
                  <p className="text-xs text-emerald-700 mt-1 underline">Read study</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
