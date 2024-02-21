import { Plus } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'

export interface tagsResponse {
  first: number
  prev: number | null
  next: number
  last: number
  pages: number
  items: number
  data: Tags[]
}

export interface Tags {
  title: string
  amountOfVideos: number
  id: string
}

export function App() {
  const { data: tagsResponse, isLoading } = useQuery<tagsResponse>({
    queryKey: ['get-tags'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/tags?_page=1&_per_page=10')
      const data = await response.json()

      return data
    },
  })

  return (
    <div className="py-10 space-y-8">
      <div>
        header
        tabs
      </div>
      <main className="max-w-6xl mx-auto space-y-5">
        <div className='flex items-center gap-3'>
          <h1 className="text-xl font-bold">Tags</h1>

          <button className='inline-flex items-center gap-1.5 text-xs bg-teal-300 text-teal-950 font-medium rounded-full px-1.5 py-1'>
            <Plus className='size-3'></Plus>
            Create new
          </button>
        </div>
      </main>
    </div>
  )
}
