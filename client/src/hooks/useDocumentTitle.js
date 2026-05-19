import { useEffect } from 'react'

// Sets document.title while the calling component is mounted.
export const useDocumentTitle = (title) => {
  useEffect(() => {
    if (title) {
      document.title = title
    }
  }, [title])
}
