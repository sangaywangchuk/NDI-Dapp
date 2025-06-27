import { cn } from "@/lib/utils";
import Image from "next/image";

const VagiraImage = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/vajra-symbol.png"
      alt="Vajra Symbol"
      width={396}
      height={396}
      className={cn('z-[-1]', className)}
    />
  );
};

export default VagiraImage;
