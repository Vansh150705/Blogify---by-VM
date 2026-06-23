import { Component } from 'react'

// Catches render errors anywhere in the tree and shows a fallback UI
// instead of a blank white screen.
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('Uncaught error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='flex flex-col items-center justify-center min-h-screen text-center px-4'>
          <h1 className='text-2xl font-semibold text-gray-700'>Something went wrong</h1>
          <p className='mt-2 text-gray-500'>An unexpected error occurred. Please reload the page.</p>
          <button
            onClick={() => window.location.reload()}
            className='mt-6 bg-[#1ABC9C] text-white px-6 py-2 rounded hover:scale-105 transition-all cursor-pointer'
          >
            Reload
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
