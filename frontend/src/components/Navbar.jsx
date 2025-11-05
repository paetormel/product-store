import { useContext } from 'react'
import { NavLink } from 'react-router'
import { ToggleContext } from '../App'
import Button from './Button';

const Navbar = () => {
    const {toggle, handleToggleMode} = useContext(ToggleContext);

    return (
        <div className={`fixed z-20 w-full ${toggle ? "shadow-lg bg-white" : 'bg-white/10 backdrop-blur-2xl'} `}>
            <div className='max-w-[1440px] mx-auto flex justify-between items-center px-5 py-2 '>
                <h1 className='text-2xl font-bold text-blue-500'>Product Store 🛒</h1>
                <nav className={`flex gap-5 ${toggle ? "text-gray-950" : "text-white"}`}>
                <NavLink to='/' className='text-lg  cursor-pointer'>Home</NavLink>
                <NavLink to="/create" className='text-lg cursor-pointer'>Create</NavLink>
                </nav>
                <div className='flex gap-2'>
                    <Button variant="add" btnIcon='➕'/>
                    <Button
                    variant='add'
                    btnIcon={toggle ? '🌙' : '☀️'}
                    onclick={handleToggleMode}
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Navbar