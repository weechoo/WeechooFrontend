import { weechooLogo } from "@/assets/images";
import Image from "next/image";

export function AppLogo() {
  return (
    <div className="flex justify-center">
      <Image src={weechooLogo} alt="WeeChoo logo" className="h-10 w-auto" />
    </div>
  );
}
