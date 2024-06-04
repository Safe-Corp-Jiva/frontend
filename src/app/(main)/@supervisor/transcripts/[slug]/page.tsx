import { dataSearch, SlugPage } from '@components/transcpt'
import { getRecording, recordingSampleKey } from '@/api/recordings'

export default async function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="w-full h-full p-14">
      <SlugPage />
    </div>
  )
}
