import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
function Header() {
    const user={
        name:'john',
    };
    const cart={
        totalCount:10,
    };
    const logout=()=>{

    }
  return (
    <header className='bg-white p-0 border-b border-red-600'>
        <div className='mx-auto flex justify-between'>
            <Link className='font-bold p-4' to="/">Food Mine!</Link>
            <nav>
                <ul className='flex list-none m-0'>
                    {
                        user?(
                          <li className='relative group'>
                            <Link className='text-red-500 p-4 inline-block' to='/profile'>{user.name}</Link>
                            <div className='absolute z-10 bg-white hidden group-hover:block'>
                                <Link className='text-red-500 p-4 inline-block w-full min-w-[8rem]' to="/profile">Profile</Link>
                                <Link className='text-red-500 p-4 inline-block w-full min-w-[8rem]' to="/orders">Orders</Link>
                                <a className='text-red-500 p-4 inline-block w-full min-w-[8rem]' onClick={logout}>Logout</a>
                            </div>
                          </li>
                        ):(
                            <Link className='text-red-500 p-4 inline-block' to='/login'>Login</Link>
                        )
                    }
                    <li className=''>
                        <Link className='text-red-500 p-4 inline-block' to='/cart'>Cart
                        {cart.totalCount>0&&(<span className='bg-red-500 text-white py-[0.1rem] px-[0.45rem] rounded-full text-[0.9rem]'>{cart.totalCount}</span>)}</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header
