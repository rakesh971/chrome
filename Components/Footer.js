import React from 'react'

const Footer = () => {
  return (
    <div className="absolute bottom-0 left-[50%] translate-x-[-50%] whitespace-nowrap p-6 text-sm text-gray-600">
        <p>Copyrights &copy; {new Date().getFullYear()} rakeshraj</p>
    </div>
  )
}

export default Footer