import { NavListItems } from "./NavListItems"

export function DesktopNav(){
  return(
        <div className="h-full pt-6 pl-6 pr-4.5">
            <div className="text-3xl font-bold text-orange-500 pb-3">Midas</div>
            <ul className="pt-6 flex flex-col gap-4">
                <NavListItems/>
            </ul>
        </div>
    )
}

