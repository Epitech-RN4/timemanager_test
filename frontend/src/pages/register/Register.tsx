import { FormEvent } from "react";
import Form from "../../components/forms/Form"
import { signUp } from "../../fetch/authentication";
import { useNavigate } from "react-router-dom";

interface IFormInputs extends EventTarget {
    username:{value:string};
    email:{value:string};
    password:{value:string};
}

export default function Register(){
    const navigate = useNavigate();
    const registerInputs = [
        {
            label:"username",
            placeholder:"Enter your username",
            type:"text",
            isRequired:true
        },
        {
            label:"email",
            placeholder:"Enter your Email",
            type:"email",
            isRequired:true
        },
        {
            label:"password",
            placeholder:"Enter your password",
            type:"password",
            isRequired:true
        },

    ]

    const onRegister = async (e:FormEvent) => {
        
        e.preventDefault();
        const {username, email, password} = e.target as IFormInputs
        const userInfo = {
            username:username.value,
            email:email.value,
            password:password.value,
        }
        await signUp(userInfo)
        navigate("/auth/login")
    }

    return(
        <Form
            title="Register"
            inputs={registerInputs}
            buttonLabel="Submit"
            onSubmit={onRegister}
        />
    )
}