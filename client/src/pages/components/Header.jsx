import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
    const user = useSelector(state=> state.user.data)
    return (
        <header className='w-11/12 mx-auto'>
            <nav className='w-full flex pt-6 justify-between'>
                <h1 className='text-xl font-bold text-primeColor'>Dev Cluster</h1>
                <div className='flex gap-4 items-center border rounded px-12 py-3 shadow-sm'><img src='/icons/user.png' className='w-[24px] h-[24px]'/> <span className='text-sm '>{user.email}</span></div>
        </nav>
        </header>
    );
};

export default Header;