import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import Navbar from "./Navbar";
import { BarChart } from "lucide-react";

export default function DashboardContent() {
  return (
    <div>
      <Navbar/>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
          <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h2 className="text-lg font-semibold">Total Revenue</h2>
            <p className="text-3xl font-bold">$45,231.89</p>
            <p className="text-sm text-gray-500">+20.1% from last month</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Subscriptions</h2>
            <p className="text-3xl font-bold">+2350</p>
            <p className="text-sm text-gray-500">+180.1% from last month</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Sales</h2>
            <p className="text-3xl font-bold">+12,234</p>
            <p className="text-sm text-gray-500">+19% from last month</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Active Now</h2>
            <p className="text-3xl font-bold">+573</p>
            <p className="text-sm text-gray-500">+201 since last hour</p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <h2 className="text-lg font-semibold mb-4">Overview</h2>
            <BarChart className="w-full h-[300px]" />
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Recent Sales</h2>
            <p className="text-sm text-gray-500 mb-4">You made 265 sales this month.</p>
            <ScrollArea className="h-[300px] space-y-4">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage alt="Olivia Martin" src="https://github.com/shadcn.png" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="font-semibold">Olivia Martin</p>
                  <p className="text-sm text-gray-500">olivia.martin@email.com</p>
                </div>
                <span className="ml-auto font-semibold">+$1,999.00</span>
              </div>
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage alt="Jackson Lee" src="https://github.com/shadcn.png" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="font-semibold">Jackson Lee</p>
                  <p className="text-sm text-gray-500">jackson.lee@email.com</p>
                </div>
                <span className="ml-auto font-semibold">+$39.00</span>
              </div>
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage alt="Isabella Nguyen" src="https://github.com/shadcn.png" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="font-semibold">Isabella Nguyen</p>
                  <p className="text-sm text-gray-500">isabella.nguyen@email.com</p>
                </div>
                <span className="ml-auto font-semibold">+$299.00</span>
              </div>
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage alt="William Kim" src="https://github.com/shadcn.png" />
                  <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="font-semibold">William Kim</p>
                  <p className="text-sm text-gray-500">will@email.com</p>
                </div>
                <span className="ml-auto font-semibold">+$99.00</span>
              </div>
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage alt="Sofia Davis" src="https://github.com/shadcn.png" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="font-semibold">Sofia Davis</p>
                  <p className="text-sm text-gray-500">sofia.davis@email.com</p>
                </div>
                <span className="ml-auto font-semibold">+$39.00</span>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  )
}