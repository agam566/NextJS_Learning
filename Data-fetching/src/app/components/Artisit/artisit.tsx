// src/components/Albums/index.tsx

interface Album {
    id: number
    title: string
    releaseYear: number
  }
  
  interface AlbumsProps {
    list: Album[]
  }
  
  const Albums = ({ list }: AlbumsProps) => {
    if (!list || list.length === 0) {
      return <p>No albums found.</p>
    }
  
    return (
      <ul>
        {list.map((album) => (
          <li key={album.id}>
            <strong>{album.title}</strong> ({album.releaseYear})
          </li>
        ))}
      </ul>
    )
  }
  
  export default Albums
  