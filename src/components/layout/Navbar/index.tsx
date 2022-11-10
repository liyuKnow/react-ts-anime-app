import React from 'react'
import { Link } from 'react-router-dom'
import Heading from '../../UI/Heading'
import Logo from './Logo'

const Navbar = () => {
    return (
        <div className='h-[70px] bg-orange-300 flex items-center justify-center pr-[1rem]'>
            {/* Logo Section */}
            <Link to={"/"}>
                <div className='flex items-center justify-between font-normal'>
                    <Logo className='w-[90px] h-[100px]' />
                    <span className="mr-[1rem]">|</span>
                    <Heading />
                </div>
            </Link >

        </div >
    )
}

export default Navbar