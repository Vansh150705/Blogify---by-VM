import React, { useMemo, useState } from 'react'
import { blogCategories } from '../assets/assets'
import { motion } from "motion/react"
import BlogCard from './BlogCard'
import { useAppContext } from '../context/AppContext'

const BlogList = () => {

    const [menu, setMenu] = useState("All")
    const {blogs, input, loading, categories} = useAppContext()

    // Prefer categories from the API; fall back to the bundled static list
    const menuCategories = categories.length ? ['All', ...categories] : blogCategories

    const displayedBlogs = useMemo(()=>{
      const bySearch = input === ''
        ? blogs
        : blogs.filter((blog)=> blog.title.toLowerCase().includes(input.toLowerCase()) || blog.category.toLowerCase().includes(input.toLowerCase()))
      return bySearch.filter((blog)=> menu === "All" ? true : blog.category === menu)
    }, [blogs, input, menu])

  return (
    <div>
      <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
        {menuCategories.map((item)=> (
            <div key={item} className='relative'>
                <button onClick={()=> setMenu(item)}
                 className={`cursor-pointer text-gray-500 ${menu === item && 'text-white px-4 pt-0.5'}`}>
                    {item}
                    {menu === item && (
                        <motion.div layoutId='underline' 
                        transition={{type: 'spring', stiffness: 500, damping: 30}}
                        className='absolute left-0 right-0 top-0 h-7 -z-1 bg-[#1ABC9C] rounded-full'></motion.div>
                    )}
                    
                </button>
            </div>
        ))}
      </div>
      {!loading && (
        <p className='text-center text-sm text-gray-500 mb-6'>
          {displayedBlogs.length} {displayedBlogs.length === 1 ? 'blog' : 'blogs'}{input ? ` for "${input}"` : ''}
        </p>
      )}
      {loading ? (
        <div className='flex justify-center mb-24'>
          <div className='animate-spin rounded-full h-10 w-10 border-4 border-t-[#1ABC9C] border-gray-200'></div>
        </div>
      ) : displayedBlogs.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
          {displayedBlogs.map((blog)=> <BlogCard key={blog._id} blog={blog}/>)}
        </div>
      ) : (
        <p className='text-center text-gray-500 mb-24'>
          No blogs found{input ? ` for "${input}"` : ''}.
        </p>
      )}
    </div>
  )
}

export default BlogList
