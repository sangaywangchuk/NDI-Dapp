import { SignUpFlowProvider } from "@/contexts/sign-up-flow-context";
import Image from "next/image";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full relative">
      <div className="fixed top-[50px] left-[40px] w-full">
        <h1 className="w-[149px] bg-[linear-gradient(90deg,rgba(232,93,4,1)_0%,rgba(244,140,6,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Urbanist-Black',Helvetica] font-black text-transparent text-[21px] tracking-[-0.42px] leading-[31.5px] whitespace-nowrap">
          Join Bhutan TDI
        </h1>
      </div>
      <Image
        src="/vajra-symbol.png"
        alt="Vajra Symbol"
        width={396}
        height={396}
        className="fixed top-[-150px] right-[-150px] rotate-[80deg]"
      />
      <div className="flex min-h-screen flex-col justify-start pt-[100px] items-center">
        <SignUpFlowProvider>
          {children}
        </SignUpFlowProvider>
      </div>
      <Image
        src="/vajra-symbol.png"
        alt="Vajra Symbol"
        width={396}
        height={396}
        className="fixed bottom-[-150px] left-[-150px] rotate-[80deg]"
      />
      <Image
        src="/vajra-symbol.png"
        alt="Vajra Symbol"
        width={396}
        height={396}
        className="fixed bottom-[-180px] right-[-190px] rotate-[60deg]"
      />
    </div>
  );
};

export default layout;
