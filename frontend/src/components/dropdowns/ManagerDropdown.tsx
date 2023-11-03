import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { Activity, ChevronDown, Flash, Server } from "../../assets/icon";
import {useEffect} from "react"
import { generateKey } from "../../utils/functions/utils";
import { useNavigate } from "react-router-dom";

export interface IManagerMenu {
    link:string,
    label:string,
    description:string,
    icon:JSX.Element
}

export default function ManagerDropdown({role}:{role:string}){
    const navigate = useNavigate();
    const managerMenu : IManagerMenu[]= [
        {
            link:"/general-info",
            label:"General info",
            description:`View the averages of the daily and weekly hours of ${role==="manager" ? "your team" : "all users"} over a given period`,
            icon:<Server className="text-warning" fill="currentColor" size={30} />
        },
        {
            link:"/dashboards",
            label:"Dashboards",
            description:`View ${role==="manager" ? "your team" : "all user"}'s dashboard`,
            icon:<Activity fill="currentColor" size={30}/>
        },
        {
            link:"/manage",
            label:`Manage ${role==="manager" ? "your team" : "all users"}`,
            description:`Add ${role ==="generalManager" ? "promote" : ""} or Remove a user from your team`,
            icon:<Flash className="text-primary" fill="currentColor" size={30}/>
        },
    ]

    useEffect(()=>{
        console.log("role dans myDropdownMenu ===", role, );
        
    },[])
    return(
        <Dropdown>
            <DropdownTrigger>
                <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={<ChevronDown fill="currentColor" size={16} />}
                    radius="sm"
                    variant="light"
                >
                    Management
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Management Menu"
                className="w-[340px]"
                itemClasses={{
                base: "gap-4",
                }}
            >
                {managerMenu.map((menu, key)=>{
                    return(
                        <DropdownItem
                            key={generateKey(menu.label)+key}
                            description={menu.description}
                            startContent={menu.icon}
                            onClick={()=>navigate(menu.link)}
                        >
                            {menu.label}
                        </DropdownItem>
                    )
                })}
            </DropdownMenu>
        </Dropdown>
    )
}