import Button from "@/components/ui/Button";
import { FC, useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from 'react-hot-toast';

interface pageProps{}

const page: FC<pageProps> = ({}) =>{
    // const [isLoading , setIsLoading] = useState(false)
    return( 
      <div className="bg-[#E7ECEE] h-screen">
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full flex flex-col items-center max-w-md space-y-8">
                <div className="flex flex-col items-center gap-8">
                    LegalBrain
                    <h2 className="mt-6 text-3xl font-bold text-center text-gray-900 tracking-wide">Welcome to a intelligent way of finding relevant cases/judgments</h2>
                </div>
                <Button title="Find More"/>
            </div>
        </div>
    </div>
    )
}

export default page