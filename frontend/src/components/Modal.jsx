import React from 'react'
import { useProductStore } from '../store/product'

const Modal = ({ modal, setModal, updateProduct, setUpdateProduct }) => {
    const {updateAProduct} = useProductStore()
    const handleUpdateProduct = async(pid, updateProduct) => {
        await updateAProduct(pid, updateProduct);
        setModal(false);
    }

    return (
        <div
        className={`fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            modal ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        >
        <div
        className={`bg-gray-950 shadow-2xl border border-white/10 rounded-2xl w-[400px] p-5 transform transition-all duration-300 ${
            modal ? 'scale-100 translate-y-0' : 'scale-90 -translate-y-5'
            }`}
        >
            <button
            className='absolute top-2 right-3 text-white cursor-pointer'
            onClick={() => setModal(false)}
            >
            x
            </button>

            <h1 className='text-2xl font-medium mb-10 text-white'>Update Product</h1>
            <form>
            <div className='flex flex-col gap-3'>
                <input
                type='text'
                className='px-10 py-4 rounded-lg bg-white/10 text-white'
                value={updateProduct.name}
                onChange={(e) =>
                    setUpdateProduct({ ...updateProduct, name: e.target.value })}

                />
                <input
                type='number'
                className='px-10 py-4 rounded-lg bg-white/10 text-white'
                value={updateProduct.price}
                onChange={(e) =>
                    setUpdateProduct({ ...updateProduct, price: e.target.value })}
                />
                <input
                type='text'
                className='px-10 py-4 rounded-lg bg-white/10 text-white'
                value={updateProduct.image}
                onChange={(e) =>
                    setUpdateProduct({ ...updateProduct, image: e.target.value })}
                />
            </div>
            </form>

            <div className='flex gap-2 flex-row-reverse mt-5'>
            <button
                className='bg-red-400 px-5 py-2 rounded-lg cursor-pointer'
                onClick={() => setModal(false)}
            >
                Close
            </button>
            <button 
            className='bg-blue-500 px-5 py-2 rounded-lg cursor-pointer'
            onClick={() => handleUpdateProduct(updateProduct._id, updateProduct)}
            >Update</button>
            </div>
        </div>
        </div>
    )
}

export default Modal
