import BusinessCard from './BusinessCard'

const businesses = [
  {
    name: 'Supermercado Central',
    category: 'Mercados',
    description: 'Produtos frescos e ótimos preços.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e',
    whatsapp: 'https://wa.me/5514999999999',
  },
  {
    name: 'Barbearia Premium',
    category: 'Barbearias',
    description: 'Cortes modernos e atendimento de qualidade.',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033',
    whatsapp: 'https://wa.me/5514999999999',
  },
  {
    name: 'Auto Mecânica Silva',
    category: 'Oficinas',
    description: 'Manutenção e revisão completa.',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc',
    whatsapp: 'https://wa.me/5514999999999',
  },
]

function FeaturedBusinesses() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-10">
          Empresas em Destaque
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {businesses.map((business) => (
            <BusinessCard
              key={business.name}
              business={business}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedBusinesses