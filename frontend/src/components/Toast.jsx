import React, { useEffect } from 'react'

const Toast = ({ message, variant , setToast }) => {
  const variants = {
    error: 'bg-red-300 text-red-800',
    success: 'bg-green-300 text-green-800',
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false)
    }, 1000) 

    return () => clearTimeout(timer)
  }, [setToast])

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div
        className={`relative rounded-2xl py-3 px-5 shadow-md text-center ${variants[variant]}`}
      >
        <p className="font-semibold text-lg capitalize">{variant}</p>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Toast
