function BusinessCard({ business }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={business.image}
        alt={business.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-3">
          {business.category}
        </span>

        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {business.name}
        </h3>

        <p className="text-gray-600 mb-4">
          {business.description}
        </p>

        <a
          href={business.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-block w-full text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          Falar no WhatsApp
        </a>
      </div>
    </div>
  )
}

export default BusinessCard