export default function Testimonials() {
  const items = [
    {
      quote: "Down 18 pounds in 12 weeks. No foods off-limits. I finally feel in control.",
      name: "Maya, product manager",
    },
    {
      quote: "My energy is steady. I cook simple meals and stopped snacking at night.",
      name: "Chris, teacher",
    },
    {
      quote: "Bloodwork improved and I kept the weight off during travel.",
      name: "Sam, consultant",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Results from readers</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t, idx) => (
            <div key={idx} className="p-6 rounded-xl border bg-gray-50">
              <p className="text-gray-800">“{t.quote}”</p>
              <p className="mt-3 text-sm text-gray-600">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
