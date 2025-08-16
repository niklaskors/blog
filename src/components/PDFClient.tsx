'use client'
import dynamic from 'next/dynamic'

const PDF = dynamic(() => import('./PDF').then(mod => mod.PDF), { ssr: false })

export default function PDFClient(props: { file: string }) {
  return <PDF {...props} />
}
