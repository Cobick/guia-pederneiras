function Hero() {
  return (
    <section className="bg-gradient-to-b from-zinc-950 to-zinc-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Encontre os melhores estabelecimentos de Pederneiras
        </h2>

        <p className="text-xl mb-8 opacity-90">
          Mercados, restaurantes, oficinas, farmácias, barbearias e muito mais.
        </p>

        <div className="bg-white rounded-xl p-3 shadow-lg max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Buscar empresas..."
            className="w-full px-4 py-3 text-gray-800 outline-none"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero