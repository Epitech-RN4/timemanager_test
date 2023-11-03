import {useContext, useState} from "react"
import { Progress } from "@nextui-org/progress";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react"
import { Clock } from "../../assets/icon";
import { UserContext } from "../../context/userContext";
import { IUserState } from "../../reducers/UserReducer";

export default function Footer () {
  const [clockLabel, setClockLabel] = useState("Clock-in");
  const { userState } = useContext(UserContext) as {
    userState: IUserState;
    userDispatch: React.Dispatch<any>;
  };
  
  const handleClocking = () => {
    
    switch (clockLabel) {
      case "Clock-in":
        setClockLabel("Clock-out")
        break;
      case "Clock-out":
        setClockLabel("Clock-in")
        break;
      default:
        break;
    }
  }

  return (
    <footer className="mt-5 absolute bottom-0 w-full">
      <Card radius="none" className="w-full">
        { userState.isLogged &&
          <>
            <CardHeader className="flex justify-center gap-3">
              <Button startContent={<Clock fill="currentColor" size={24}/>} size="lg" radius="full" color={clockLabel === "Clock-in" ? "success" : "danger"} onPress={handleClocking} children={clockLabel}/>
            </CardHeader>
            <Divider/>
            <CardBody>
              <Progress aria-label="Time left..." value={60} className="max-w"/>
            </CardBody>
          </>
        }
      <CardFooter className="flex justify-center gap-3">
          <p>&copy; Time Manager</p>
      </CardFooter>
    </Card>
    </footer>
  );
}
