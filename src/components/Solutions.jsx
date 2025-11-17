export default function Solutions() {
  const items = [
    {
      title: "Clear daily actions",
      text: "Know exactly what to do each day. No guesswork.",
    },
    {
      title: "Flexible meals",
      text: "Eat foods you enjoy while hitting your targets.",
    },
    {
      title: "Repeatable system",
      text: "Build habits that survive busy weeks and travel.",
    },
  ]

  return (
    <section id="solution" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">The solution</h2>
        <p className="text-gray-600 mt-3 text-center">What the book gives you.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-xl bg-white border">
              <h3 className="text-xl font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
