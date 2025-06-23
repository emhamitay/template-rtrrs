import { Outlet } from "react-router";
import { Card } from "@/components/ui/card"

export default function Layout(){
    return (
    <div className="flex h-screen gap-4 p-5">
      <Card className="flex-grow">
        <div className="flex flex-row flex-1 justify-center">
          <div className="flex w-64 h-96 gap-4">
            <Card className='flex-grow'>
              <Outlet />
            </Card>
          </div>
        </div>
      </Card>
    </div>
    )
}