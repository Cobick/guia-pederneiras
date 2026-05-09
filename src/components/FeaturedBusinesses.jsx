import { useEffect, useState } from 'react'
import BusinessCard from './BusinessCard'
import { supabase } from '../services/supabase'

function FeaturedBusinesses() {
  const [empresas, setEmpresas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function carregarEmpresas() {
      const { data, error } = await supabase
        .from('empresas')
        .select('*')
        .eq('destaque', true)
        .eq('ativo', true)
        .limit(6)

      if (error) {
        console.error('Erro ao buscar empresas:', error)
      } else {
        setEmpresas(data)
      }

      setLoading(false)
    }

    carregarEmpresas()
  }, [])

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-500">Carregando empresas...</p>
        </div>
      </section>
    )
  }

  if (empresas.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-500">
            Nenhuma empresa em destaque encontrada.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-10">
          Empresas em Destaque
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {empresas.map((empresa) => (
            <BusinessCard
              key={empresa.id}
              business={{
                name: empresa.nome,
                category: 'Destaque',
                description: empresa.descricao,
                image:
                  empresa.imagem_url ||
                  'https://via.placeholder.com/600x400?text=Sem+Imagem',
                whatsapp: empresa.whatsapp || '#',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedBusinesses