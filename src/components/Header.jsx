function Header() {
  return (
    <header className="bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-cyan-400 tracking-wide">
          Guia Pederneiras
        </h1>

        <a
          href="https://wa.me/5514999999999?text=Quero%20anunciar%20minha%20empresa"
          target="_blank"
          rel="noreferrer"
          className="bg-cyan-500 text-black px-4 py-2 rounded-lg hover:bg-cyan-400 transition font-semibold"
        >
          Anunciar Empresa
        </a>
      </div>
    </header>
  )
}

export default Header