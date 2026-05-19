import { useEffect, useState } from 'react'

// Floating button that appears after scrolling down and returns to the top.
const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type='button'
      aria-label='Back to top'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className='fixed bottom-6 right-6 z-50 h-11 w-11 rounded-full bg-[#1ABC9C] text-white text-xl shadow-lg hover:scale-110 transition-all cursor-pointer'
    >
      ↑
    </button>
  )
}

export default BackToTop
