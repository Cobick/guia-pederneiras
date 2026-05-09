const categories = [
  'Mercados',
  'Farmácias',
  'Barbearias',
  'Restaurantes',
  'Oficinas',
  'Igrejas',
  'Hotéis',
  'Clínicas',
]

function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-10">
          Categorias
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center font-semibold"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories