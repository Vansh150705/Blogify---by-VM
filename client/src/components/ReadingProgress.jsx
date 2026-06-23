import { useEffect, useState } from 'react'

// Thin bar fixed to the top of the viewport that tracks scroll progress.
const ReadingProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className='fixed top-0 left-0 z-50 h-1 bg-[#1ABC9C]'
      style={{ width: `${progress}%` }}
    />
  )
}

export default ReadingProgress
