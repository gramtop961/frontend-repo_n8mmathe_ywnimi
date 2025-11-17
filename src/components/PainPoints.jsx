export default function PainPoints() {
  const items = [
    {
      title: "Confusing advice",
      text: "You hear rules that clash. You freeze and do nothing.",
    },
    {
      title: "All-or-nothing diets",
      text: "You start hard, burn out fast, and regain weight.",
    },
    {
      title: "Low energy",
      text: "You feel hungry, foggy, and stuck at work and home.",
    },
  ]

  return (
    <section id="problem" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">The problem</h2>
        <p className="text-gray-600 mt-3 text-center">Why nutrition feels hard.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-xl border bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
