
import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <section className="px-4 flex justify-center items-center h-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">
        <div className="flex flex-col md:flex-row rounded-2xl md:h-1/2 md:w-7/12">

          <div className="p-8 text-white md:w-1/2  rounded md:rounded-l-2xl
            md:bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">
            <div className="flex items-center space-x-2">
              <img src="/assets/LyfeLynk.png" alt="logo" className="w-8 h-8"/>
              <h1 className="text-4xl font-bold">LyfeLynk</h1>
            </div>
            <p className="md:py-44 italic text-xl md:text-4xl">Digitally Linking your health.</p>
          </div>

          <div className="flex items-center justify-center  p-8 md:w-1/2 bg-white rounded md:rounded-r-2xl">
            <div className="w-full max-w-md">
              
              <h2 className="text-2xl font-semibold">Get Started</h2>
              <p className="mt-1 text-sm text-gray-600">Login/Register As</p>
              <div className="mt-4 space-y-3">
                <Button className="flex w-full items-center justify-between rounded-lg border px-4 py-2 text-left">
                  <div className="flex items-center space-x-2">
                    <img
                      alt="User"
                      className="h-6 w-6"
                      height={24}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "24/24",
                        objectFit: "cover",
                      }}
                      width={24}
                    />
                    <span>Health User</span>
                  </div>
                  <img
                    alt="Dummy"
                    className="h-4 w-4"
                    height={16}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "16/16",
                      objectFit: "cover",
                    }}
                    width={16}
                  />
                </Button>
                <Button className="flex w-full items-center justify-between rounded-lg border px-4 py-2 text-left">
                  <div className="flex items-center space-x-2">
                    <img
                      alt="Professional"
                      className="h-6 w-6"
                      height={24}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "24/24",
                        objectFit: "cover",
                      }}
                      width={24}
                    />
                    <span>Health Professional</span>
                  </div>
                  <img
                    alt="Dummy"
                    className="h-4 w-4"
                    height={16}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "16/16",
                      objectFit: "cover",
                    }}
                    width={16}
                  />
                </Button>
                <Button className="flex w-full items-center justify-between rounded-lg border px-4 py-2 text-left">
                  <div className="flex items-center space-x-2">
                    <img
                      alt="Service"
                      className="h-6 w-6"
                      height={24}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "24/24",
                        objectFit: "cover",
                      }}
                      width={24}
                    />
                    <span>Health Service</span>
                  </div>
                  <img
                    alt="Dummy"
                    className="h-4 w-4"
                    height={16}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "16/16",
                      objectFit: "cover",
                    }}
                    width={16}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

