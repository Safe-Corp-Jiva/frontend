import { dataSearch, SlugPage } from '@components/transcpt'

export default async function Page({ params }: { params: { slug: string } }) {
  const transcript = dataSearch.find((transcript) => transcript.id === parseInt(params.slug))

  return (
    <div className="w-full h-full p-14">
      {transcript ? <SlugPage transcript={transcript} /> : <p>Transcript not found.</p>}
    </div>
  )
}
