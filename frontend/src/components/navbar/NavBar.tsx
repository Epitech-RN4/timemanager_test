import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { UserContext } from "../../context/userContext.js";
import {useContext, useEffect} from "react";
import { IUserState } from "../../reducers/UserReducer.js";
import AuthButton from "./AuthButton.js";
import { getURL } from "../../utils/functions/utils.js";
import ManagerDropdown from "../dropdowns/ManagerDropdown.js";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../fetch/authentication.js";

export default function NavBar() {
  const { userState, userDispatch } = useContext(UserContext) as {
    userState: IUserState;
    userDispatch: React.Dispatch<any>;
  };
  const navigate = useNavigate();

  const logout = async () => {
    userDispatch({
      type:"LOGOUT",
      payload:null
    })
    await signOut();
    localStorage.removeItem("accessToken")
    return navigate("/")

  }

  useEffect(()=>{
    
  },[])

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">TimeManager</p>
      </NavbarBrand>
      {
        userState.isLogged 
        ?
        <>
            <NavbarContent className="sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link href={getURL("/dashboard")} aria-current="page">
                            My Dashboard
                        </Link>
                    </NavbarItem>
                    {
                        !userState.role || userState.role === "employee" 
                            ? <></>
                            : <ManagerDropdown role={userState.role}/>
                    }
            </NavbarContent>
            
            <NavbarContent as="div" justify="end">
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                    <Avatar
                        isBordered
                        as="button"
                        className="transition-transform"
                        color="secondary"
                        name={userState.user}
                        size="sm"
                        src={userState.picture && userState.picture}
                        isDisabled={userState.picture ? false : true}
                    />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem aria-label="my profile" key="profile" className="h-14 gap-2" onClick={()=>navigate("/myProfile")}>
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">{userState.mail}</p>
                        </DropdownItem>
                        <DropdownItem aria-label="account security" key="security" onClick={()=>navigate("/security")}>Security</DropdownItem>
                        <DropdownItem key="logout" className="text-danger" color="danger" onClick={logout}>
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </>
        :
           <AuthButton/>
      }
    </Navbar>
  );
}