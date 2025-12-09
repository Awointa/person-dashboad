'use client'
import {useState} from 'react';
import { Menu } from 'lucide-react';
import { NavListItems } from './NavListItems';

export function MobileNav(){
    const[toggle, setToggle] = useState(false);

    function switchToggle(){
        setToggle(!toggle);
    }
    return(
     <div className='z-50 lg:hidden'>
        <Menu className='cursor-pointer' onClick={switchToggle}/>
        {
            toggle && (
                <>
                     <div 
                        className='fixed inset-0 bg-black/50 z-40' 
                        onClick={switchToggle}
                    />
                    <ul className='absolute top-0 left-0 h-full bg-white w-[50vw] md:w-80 pl-4 pt-4 z-50 pr-4 md:pr-0'>
                        <NavListItems/>
                    </ul>
                </>
               )
        }
        
     </div>
    )
}