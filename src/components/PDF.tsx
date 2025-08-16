'use client'
import { useState, useEffect, useRef } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

// Ensure PDF.js worker is available on the client
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export function PDF({ file }: { file: string }) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [width, setWidth] = useState<number>(600)
  const containerRef = useRef<HTMLDivElement | null>(null)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setLoading(false)
    setError(null)
  }

  function onDocumentLoadError(err: any) {
    console.error('PDF load error', err)
    setError(String(err?.message ?? err))
    setLoading(false)
  }

  useEffect(() => {
    function updateWidth() {
      const w = containerRef.current?.clientWidth
      if (w && w > 0) setWidth(w)
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  if (!file) return null

  return (
    <div className='border-x border-neutral-200 p-4 min-h-screen'>
      <div ref={containerRef} >
        <Document loading={false} file={file} onLoadSuccess={onDocumentLoadSuccess} onLoadError={onDocumentLoadError}>
          {numPages &&
            Array.from(new Array(numPages), (_el, index) => (
              <div key={`page_${index + 1}`}
              ><Page
                  pageNumber={index + 1}
                  width={width}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  loading={false}
                />
                <div className='border-b-1 border-neutral-200'></div></div>
            ))}
        </Document>
      </div>

    </div>
  )
}