import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Input } from "@nextui-org/react";
import { FormEventHandler } from "react";

interface IFormProps {
    title:string;
    inputs:{
        label:string,
        placeholder:string,
        type:string,
        isRequired:boolean
    }[];
    buttonLabel:string;
    onSubmit:FormEventHandler<HTMLFormElement>
}

export default function Form({title, inputs, buttonLabel, onSubmit}:IFormProps){
    
    return(
        <form className="flex justify-center" onSubmit={onSubmit}>
            <Card className="w-35">
                <CardHeader className="justify-center text-lg mb-0">
                    <Card radius="lg">
                        <CardBody className="p-2">
                            {title}
                        </CardBody>
                    </Card>
                </CardHeader>
                <CardBody>
                    {inputs.map((input, key) =>{
                        return(
                            <Input 
                                className="mb-3"
                                key={input.label + key}
                                label={input.label}
                                name={input.label}
                                placeholder={input.placeholder}
                                labelPlacement="outside" 
                                isRequired={input.isRequired}
                                type={input.type}
                                aria-label={input.label}
                            />
                        )
                    })}
                </CardBody>
                <Divider/>
                <CardFooter className="justify-center">
                    <Button type="submit" children={buttonLabel}/>
                </CardFooter>
            </Card>
        </form>
    )
}