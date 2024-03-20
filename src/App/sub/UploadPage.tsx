import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Space } from "lucide-react";
import Navbar from "@/App/Navbar";

export default function UploadContent() {
  return (
    <div>
      <section>
        <Navbar/>
      </section>
      <div className="flex flex-col items-center justify-center p-8">
          <div className="flex items-center justify-between w-full">
            <Link to="/App/MyHealth/">
              <div className="flex text-gray-600">
                <ChevronLeft className=" mr-2" />
                Back
              </div>
            </Link>
    
          </div>
        <h1 className="mt-4 text-4xl font-bold">Upload your Health Data</h1>
        <p className="mt-2 text-lg text-gray-600">Choose a suitable format to upload your data.</p>
        <div className="mt-6 w-full max-w-2xl">
          <Tabs defaultValue="Document">
            <TabsList className="w-full">
              <TabsTrigger className="w-1/2" value="Document">Document</TabsTrigger>
              <TabsTrigger className="w-1/2" value="Form">Form</TabsTrigger>
            </TabsList>
            <TabsContent value="Document">
              <p className="text-sm mb-4 text-gray-500">Supported file formats include PDFs, CSVs, XML, JPGs and JPEGs.</p>
              <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg mb-4">
                <Button className="mb-2">Add Files</Button>
                <span className="text-sm text-gray-500">or</span>
                <span className="text-sm text-gray-500">drag your files here</span>
              </div>
              <Button>Upload</Button>
            </TabsContent>
            
            <TabsContent value="Form">

            </TabsContent>
          </Tabs>
        </div>


      </div>
    </div>
  )
}