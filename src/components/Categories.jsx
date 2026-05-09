import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
            <Link
              key={categoria.id}
              to={`/categoria/${categoria.slug}`}
              className="
                bg-zinc-900 
                border border-zinc-800 
                px-4 py-3 
                rounded-full 
                text-center 
                font-medium 
                text-white 
                hover:border-cyan-500 
                hover:text-cyan-400 
                hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] 
                transition
              "
            >
              {categoria.nome}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories