'use client'
import { usePathname } from "next/navigation";
import {useRef, useEffect} from "react";
import { House, CreditCard, ArrowUpDown, ListPlus, ChartNoAxesColumn, Box, CircleUser } from "lucide-react";
import Link from "next/link";

const navItems = [{icon:<House />, text:"Dashboard", link:"/" }, {icon:<CreditCard/>, text:"Transaction", link:"/transaction"}, {icon:<ArrowUpDown />, text:"Budget", link: "/budget"}, {icon:<ListPlus />, text:"Goals", link:"/goals"}, {icon:<ChartNoAxesColumn />, text:"Chart", link:"/chart"}, {icon:<Box />, text:"Analytics", link:"/analytics"}, {icon:< CircleUser />, text:"Profile", link: "/profile"},]

export function NavListItems() {
    const pathname = usePathname();
    const activeRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({})

    useEffect(() => {
      // focus the active nav item
      const activeRef = activeRefs.current[pathname]
      if(activeRef) {
        activeRef.focus()
      }
    }, [pathname])

    return (
      <>
        {navItems.map((item) => {
          const isActive = pathname === item.link
          return (
            <li key={item.link} className={` hover:bg-zinc-200  px-2.5 py-2.5 rounded-full cursor-pointer ${isActive 
              && 'bg-zinc-200 ring-0 outline-none'}`}>
              <Link
              ref={(el) => {
                if (isActive) {
                  activeRefs.current[item.link] = el
                }
              }}
                href={item.link} className="flex gap-4">
                <span>{item.icon}</span>
                <span>{item.text}</span>
            </Link>            
          </li>)})
        }
      </>
    );
  }
  