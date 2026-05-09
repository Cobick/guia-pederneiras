function BusinessCard({ business }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-cyan-500 transition">
      <img
        src={business.image}
        className="w-full h-48 object-cover opacity-90"
      />

      <div className="p-5">
        <span className="text-xs text-cyan-400 uppercase tracking-wider">
          {business.category}
        </span>

        <h3 className="text-xl font-bold mt-2 text-white">
          {business.name}
        </h3>

        <p className="text-zinc-400 mt-2 text-sm">
          {business.description}
        </p>

        <a
          href={business.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="mt-4 block text-center bg-cyan-500 text-black py-3 rounded-lg hover:bg-cyan-400 transition font-semibold"
        >
          WhatsApp
        </a>
      </div>
    </div>
  )
}

export default BusinessCard