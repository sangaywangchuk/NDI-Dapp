import { ScanLine, Home, User, Settings } from "lucide-react";
import Link from "next/link";
import VagiraImage from "@/components/ui/vagira";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full relative">
      <div className="fixed top-[50px] left-[40px] w-full">
        <h1 className="w-[149px] bg-[linear-gradient(90deg,rgba(232,93,4,1)_0%,rgba(244,140,6,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Urbanist-Black',Helvetica] font-black text-transparent text-[21px] tracking-[-0.42px] leading-[31.5px] whitespace-nowrap">
          Join Bhutan TDI
        </h1>
      </div>
      <VagiraImage className="fixed top-[-150px] right-[-150px] rotate-[80deg]" />
      <div className="flex flex-col h-screen">
        <div className="px-4 flex-grow-[9] pt-[100px] overflow-auto">
          {children}
        </div>
        <nav className="fixed bottom-2 left-1/2 -translate-x-1/2 z-20 w-full max-w-md px-4">
          <div className="flex justify-between items-center bg-white/90 backdrop-blur rounded-full shadow-lg px-2 py-2">
            <Link href="/dashboard/scan">
              <button
                aria-label="Scan"
                tabIndex={0}
                className="w-14 h-14 flex flex-col items-center justify-center rounded-full p-0 shadow-md hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <ScanLine className="w-6 h-6" />
                <span className="text-xs mt-1 text-gray-700">Scan</span>
              </button>
            </Link>
           
            <Link href="/dashboard/apply-now">
              <button
                aria-label="Scan"
                tabIndex={0}
                className="w-14 h-14 flex flex-col items-center justify-center rounded-full p-0 shadow-md hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <ScanLine className="w-6 h-6" />
                <span className="text-xs mt-1 text-gray-700">Apply</span>
              </button>
            </Link>
            <Link href="/dashboard">
              <button
                aria-label="Home"
                tabIndex={0}
                className="flex flex-col items-center w-14 h-14 justify-center p-2 rounded-full shadow-md hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <Home className="w-6 h-6" />
                <span className="text-xs mt-1 text-gray-700">Home</span>
              </button>
            </Link>
            <Link href="/dashboard/profile">
              <button
                aria-label="Profile"
                tabIndex={0}
                className="flex flex-col items-center w-14 h-14 justify-center p-2 rounded-full shadow-md hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <User className="w-6 h-6" />
                <span className="text-xs mt-1 text-gray-700">Profile</span>
              </button>
            </Link>
            <Link href="/dashboard/setting">
              <button
                aria-label="Settings"
                tabIndex={0}
                className="flex flex-col items-center w-14 h-14 justify-center p-2 rounded-full shadow-md hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <Settings className="w-6 h-6" />
                <span className="text-xs mt-1 text-gray-700">Settings</span>
              </button>
            </Link>
          </div>
        </nav>
      </div>

      <VagiraImage className="fixed bottom-[-80px] left-[-150px] rotate-[80deg]" />

      <VagiraImage className="fixed bottom-[-120px] right-[-190px] rotate-[60deg]" />
    </div>
  );
};

export default layout;
