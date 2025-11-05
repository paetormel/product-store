import React from 'react'

const Button = ({variant, btnIcon, onclick, type = 'submit'}) => {
    const variants = {
        add: `p-3 bg-black/30 rounded-2xl cursor-pointer`,
        blue: `px-10 py-3 bg-blue-500 text-lg font-bold rounded-lg cursor-pointer`
    }
    return (
    <>
    <button 
    type={type}
    className={`${variants[variant]}`}
    onClick={onclick}
    >{btnIcon}</button>
    </>

    )
}

export default Button