import Image from "next/image";
import { Poppins } from "next/font/google"

import { cn } from "@/lib/utils"

const font = Poppins({
   subsets: ["latin"],
   weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
});

export const Logo = () => {
   return (
      <div className="flex flex-col items-center gap-y-4">
         <div className="bg-white p-1 rounded-full">
            <Image
               src="/lines.svg"
               alt="Logo"
               width={80}
               height={80}
            />
         </div>
         <div className={cn("flex flex-col items-center", font.className)}>
            <p className=
               "text-xl font-semibold"
            >Game Hub</p>
            <p className=
               "text-sm, text-muted-foreground"
            >Let's Play</p>
         </div>
      </div>
   )
}