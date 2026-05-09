import { useEffect, useState } from 'react'
import { supabase } from '../services/supabase'

function Categories() {
  const [categorias, setCategorias] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function carregarCategorias() {
      const { data, error } = await supabase
        .from('categorias')
        .select('*')
        .order('nome')

      if (error) {
        console.error('Erro ao buscar categorias:', error)
      } else {
        setCategorias(data)
      }

      setLoading(false)
    }

    carregarCategorias()
  }, [])

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-500">Carregando categorias...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-10">
          Categorias
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categorias.map((categoria) => (
            <div
              key={categoria.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center font-semibold"
            >
              {categoria.nome}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories