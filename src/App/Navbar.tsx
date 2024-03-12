import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 border-b">
      <div className="flex items-center space-x-4">
        <img
          alt="Logo"
          className="h-6 w-6"
          src="/public/assets/LyfeLynk.png"/>
        <p className="hidden md:block text-2xl font-semibold text-blue-600">
          LyfeLynk
        </p>
      </div>
      <div className="hidden md:flex space-x-4">
        <p className="text-gray-600 hover:text-gray-800">
          Dashboard
        </p>
        <p className="text-gray-600 hover:text-gray-800">
          My Health
        </p>
        <p className="text-gray-600 hover:text-gray-800">
          Marketplace
        </p>
        <p className="text-gray-600 hover:text-gray-800">
          Profile
        </p>
      </div>
      <div className="flex items-center">
        <Select>
          <SelectTrigger id="language">
            <SelectValue placeholder="English" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="spanish">Spanish</SelectItem>
          </SelectContent>
        </Select>
        <Avatar className="ml-4">
          <AvatarImage alt="John Lenon" src="/placeholder.svg?height=32&width=32" />
          <AvatarFallback>John Lenon</AvatarFallback>
        </Avatar>
        <Button className="ml-4" variant="outline">
          Connect
        </Button>
      </div>
    </nav>
  )
}