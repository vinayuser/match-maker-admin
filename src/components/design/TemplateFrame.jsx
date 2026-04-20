import { useEffect, useMemo, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

export function TemplateFrame({ templateFile }) {
  const navigate = useNavigate()
  const iframeRef = useRef(null)
  const [frameHeight, setFrameHeight] = useState(1200)
  const [isLoaded, setIsLoaded] = useState(false)

  const src = useMemo(() => `/templates/${templateFile}.html`, [templateFile])

  useEffect(() => {
    setIsLoaded(false)
  }, [templateFile])

  const handleLoad = () => {
    const frame = iframeRef.current
    if (!frame?.contentDocument) {
      return
    }

    const doc = frame.contentDocument

    const updateHeight = () => {
      const nextHeight = Math.max(
        doc.documentElement.scrollHeight || 0,
        doc.body?.scrollHeight || 0,
        900
      )
      setFrameHeight(nextHeight)
    }
    updateHeight()

    if (frame.contentWindow) {
      frame.contentWindow.addEventListener("resize", updateHeight)
    }

    doc.addEventListener("click", (event) => {
      const anchor = event.target.closest("a")
      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href || href.startsWith("javascript:") || href.startsWith("#")) {
        return
      }

      if (href.startsWith("/")) {
        event.preventDefault()
        setIsLoaded(false)
        navigate(href)
      }
    })

    setIsLoaded(true)
  }

  return (
    <div className="h-full overflow-y-auto px-4 pb-4">
      <iframe
        ref={iframeRef}
        title={templateFile}
        src={src}
        onLoad={handleLoad}
        className={`w-full border-0 block bg-[#0e0e0e] rounded-xl transition-opacity duration-150 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ height: `${frameHeight}px` }}
      />
    </div>
  )
}
