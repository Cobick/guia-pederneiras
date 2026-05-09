import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../services/supabase'
import BusinessCard from '../components/BusinessCard'

function CategoryPage() {
  const { slug } = useParams()

  const [categoria, setCategoria] = useState(null)
  const [empresas, setEmpresas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function carregarDados() {
      setLoading(true)

      // 1. Buscar categoria pelo slug
      const { data: categoriaData, error: categoriaError } = await supabase
        .from('categorias')
        .select('*')
        .eq('slug', slug)
        .single()

      if (categoriaError) {
        console.error('Erro categoria:', categoriaError)
        setLoading(false)
        return
      }

      setCategoria(categoriaData)

      // 2. Buscar empresas dessa categoria
      const { data: empresasData, error: empresasError } = await supabase
        .from('empresas')
        .select('*')
        .eq('categoria_id', categoriaData.id)
        .eq('ativo', true)

      if (empresasError) {
        console.error('Erro empresas:', empresasError)
      } else {
        setEmpresas(empresasData)
      }

      setLoading(false)
    }

    carregarDados()
  }, [slug])

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16">
        <p className="text-gray-500">Carregando...</p>
      </div>
    )
  }

  if (!categoria) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16">
        <p className="text-red-500">Categoria não encontrada.</p>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-2">
        {categoria.nome}
      </h1>

      <p className="text-gray-600 mb-10">
        Empresas da categoria {categoria.nome}
      </p>

      {empresas.length === 0 ? (
        <p className="text-gray-500">
          Nenhuma empresa encontrada nesta categoria.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {empresas.map((empresa) => (
            <BusinessCard
              key={empresa.id}
              business={{
                name: empresa.nome,
                category: categoria.nome,
                description: empresa.descricao,
                image:
                  empresa.imagem_url ||
                  'https://via.placeholder.com/600x400',
                whatsapp: empresa.whatsapp || '#',
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CategoryPage