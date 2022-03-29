import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open,setOpen]=useState(false)
    const routes=[
        {id:1,name:'Home',link:'/home'},
        {id:1,name:'Shop',link:'/shop'},
        {id:1,name:'Deals',link:'/deals'},
        {id:1,name:'Coupons',link:'/coupons'},
        {id:1,name:'Contact',link:'/contact'}
    ]
    return (
        <nav className='bg-indigo-200'>
            <div  onClick={()=>setOpen(!open)} className='w-6  h-6 md:hidden '>
                {open?<XIcon></XIcon>:<MenuIcon></MenuIcon>}
                
            </div>
            <ul className={`md:flex w-full bg-indigo-200 justify-center absolute md:static duration-500 ease-in  ${open?'top-6':'top-[-120px]'}`}>
             {
                 routes.map(route=><Link route={route} />)
             }
            </ul>
        </nav>
    );
};

export default Navbar;