import React from 'react'
import { useProductStore } from '../store/product'
import Modal from './Modal'

const ProductCard = ({ product, index, setToast, modal , setModal, setUpdateProduct }) => {
    const { deleteProduct } = useProductStore()

    const handleDeleteProduct = async (pid) => {
        const { success, message } = await deleteProduct(pid)
        console.log("Response:", success, message)

        if (success) {
        setToast({ message, variant: 'success' })
        } else {
        setToast({ message, variant: 'error' })
        }
    }

    return (
        <div
        key={index}
        className='bg-white/5 p-5 max-w-[260px] rounded-2xl mt-10 transform hover:-translate-y-2 duration-300'
        >
        <div className='bg-white/50 rounded-2xl p-3 mb-2'>
            <img className='w-50 h-50' src={product.image} alt={product.name} />
        </div>
        <p className='text-lg mb-5'>{product.name}</p>
        <div className='flex justify-between'>
            <p className='text-3xl font-medium'>${product.price}</p>
            <div className='flex gap-2'>
            <button 
            className='p-2 rounded-lg cursor-pointer bg-blue-400'
            onClick={()=>{
                setModal(true)
                setUpdateProduct(product)}
            }
            >✏️</button>
            <button
                className='p-2 rounded-lg cursor-pointer bg-red-400'
                onClick={() => handleDeleteProduct(product._id)}
            >
                🥤
            </button>
            </div>
        </div>
        </div>
    )
}

export default ProductCard
