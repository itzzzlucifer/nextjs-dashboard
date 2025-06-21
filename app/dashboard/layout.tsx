import SideNav from "@/app/ui/dashboard/sidenav";
import { DivideIcon } from "@heroicons/react/24/outline";

import React from 'react'

function Layout({children}:{children: React.ReactNode}) {
  return (
    <div className="flex flex-col md:flex-row h-screen md:overflow-hidden">
        <div className="w-full flex:none md:w-64">
            <SideNav/>
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  )
}

export default Layout;