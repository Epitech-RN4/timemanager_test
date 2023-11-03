import {useEffect} from "react";
import { Button, Link, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import { getEndpoint } from "../../utils/functions/utils";

export default function AuthButton(){
    const endpoint = getEndpoint(useLocation())

    useEffect(()=>{
        
    },[])
    return (
        <NavbarContent justify="end">
                <NavbarItem>
                    {
                        endpoint === "login" 
                        ?
                            <Button as={Link} color="primary" href={import.meta.env.VITE_BASE_URL + "/auth/register"} variant="flat">
                                Sign Up
                            </Button>
                        :
                            <Button as={Link} color="primary" href={import.meta.env.VITE_BASE_URL + "/auth/login"} variant="flat">
                                Sign In
                            </Button>
                    }
                </NavbarItem>
        </NavbarContent>
    )
}