import Albums from "../components/Artisit/artisit";
 
async function getArtist(username: string) {
  const res = await fetch(`https://api.spotify.com/v1/artists/${id}`)
  return res.json()
}
 
async function getAlbums(username: string) {
  const res = await fetch(`https://api.spotify.com/v1/artists/${id}`)
  return res.json()
}
 
export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  const { username } = await params
  const artistData = getArtist(username)
  const albumsData = getAlbums(username)
 
  // Initiate both requests in parallel
  const [artist, albums] = await Promise.all([artistData, albumsData])
 
  return (
    <>
      <h1>{artist.name}</h1>
      <Albums list={albums} />
    </>
  )
}