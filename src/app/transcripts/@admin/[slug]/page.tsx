import React from 'react' 

export default function Page({ params }: { params: { slug: number } }) {
  return <div className='w-full h-full'>My Post: {params.slug}</div>
}

