import React, { useState, useContext } from 'react';
import { ToggleContext } from '../App';
import { useProductStore } from '../store/product';
import Button from '../components/Button';
import { useNavigate } from 'react-router';

const CreatePage = () => {
    const { toggle } = useContext(ToggleContext);
    const { createProduct } = useProductStore();
    const navigate = useNavigate()

    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        image: ''
    });

    // Debug: Check if component renders
    React.useEffect(() => {
        console.log('CreatePage rendered!');
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        console.log('Form submitted with:', newProduct);
        const { success, message } = await createProduct(newProduct);
        console.log('Response:', { success, message });
        if (success) {
            setNewProduct({ name: '', price: '', image: '' });
            alert(message);
            navigate('/')

        } else {
            alert(message);
        }
    };

    return (
        <div className={`w-full flex flex-col justify-center items-center h-screen ${toggle ? "text-gray-950" : "text-white"}`}>
        <div className={`max-w-lg w-full ${toggle ?"shadow-2xl" : "bg-white/5" }  p-10 rounded-2xl`}>
            <h1 className='text-center text-2xl font-bold mb-10'>Create New Product</h1>
            <form onSubmit={handleAddProduct} className='flex flex-col gap-3 text-lg'>
            <input 
                className={`px-10 py-4 rounded-lg bg-white/10 ${toggle ? "text-gray-950 placeholder-gray-700" : "text-white placeholder-gray-300"}`}
                type='text'
                name='name'
                placeholder='Product name'
                value={newProduct.name}
                onChange={handleChange}
            />
            <input 
                className={`px-10 py-4 rounded-lg bg-white/10 ${toggle ? "text-gray-950 placeholder-gray-700" : "text-white placeholder-gray-300"}`}
                type='number'
                name='price'
                placeholder='Price'
                value={newProduct.price}
                onChange={handleChange}
            />
            <input 
                className={`px-10 py-4 rounded-lg bg-white/10 ${toggle ? "text-gray-950 placeholder-gray-700" : "text-white placeholder-gray-300"}`}
                type='text'
                name='image'
                placeholder='Image URL'
                value={newProduct.image}
                onChange={handleChange}
            />
            <Button btnIcon='Add product' variant='blue' />
            </form>
        </div>
        </div>
    );
};

export default CreatePage;
