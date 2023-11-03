import { Card, CardBody } from "@nextui-org/react";
import { Outlet } from "react-router-dom";

export default function AuthLayout () {
  return (
    <div className="gap-2 justify-center">
      <div>
        <Card className="px-7 py-7">
          <CardBody>
            <Outlet/>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
