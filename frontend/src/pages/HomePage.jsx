import React, { useContext, useEffect, useState } from 'react'
import { ToggleContext } from '../App'
import { Link } from 'react-router'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'
import Toast from '../components/Toast'
import Modal from '../components/Modal'

const HomePage = () => {
    const { toggle } = useContext(ToggleContext)
    const { fetchProducts, products } = useProductStore()
    const [toast, setToast] = useState(false);
    const [modal, setModal] = useState(false);
    const [updateProduct, setUpdateProduct] = useState(null)
    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    console.log('Products:', products)

    return (
        <div
        className={`relative w-full py-20 flex-col flex justify-center items-center ${
            toggle ? 'text-gray-950' : 'text-gray-100'
        }`}
        >
        <h1 className='text-4xl text-blue-500 mb-20 font-bold'>
            Current Products
        </h1>

        {products?.length === 0 && (
            <p>
            No product found.{' '}
            <Link to='/create' className='text-blue-500'>
                Create a product
            </Link>
            </p>
        )}

        <div className='grid grid-cols-4 justify-center items-center gap-10'>
            {products.map((product, index) => (
            <ProductCard
                key={index} 
                index={index}
                product={product}
                setToast={setToast}
                modal={modal}
                setModal={setModal}
                setUpdateProduct={setUpdateProduct}
                updateProduct={updateProduct}
            />
            ))}
        </div>
        {toast && <Toast toast={toast} setToast={setToast} message={toast.message} variant={toast.variant} />}
        {
            modal && (
            <Modal updateProduct={updateProduct} setUpdateProduct={setUpdateProduct} modal={modal} setModal={setModal} description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, officiis!'/>
            )
        }
        </div>
    )
}

export default HomePage
