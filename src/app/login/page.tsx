'use client'

import Button from "@/components/ui/Button";
import { FC, useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from 'react-hot-toast';

interface pageProps{}

const page: FC<pageProps> = ({}) =>{
    const [isLoading , setIsLoading] = useState(false)

    async function loginWithGoogle(){
        setIsLoading(true)
        try{
            //throw new Error("dosent matter")
            await signIn('google')
        }
        catch(error){
            toast.error("Something went wrong with login")
        }
        finally{
            setIsLoading(false)
        }
        
    }
    return( 
      <div className="bg-[#E7ECEE] h-screen">
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full flex flex-col items-center max-w-md space-y-8">
                <div className="flex flex-col items-center gap-8">
                    {/* logo */}
                    <h2 className="mt-6 text-3xl font-bold text-center text-gray-900 tracking-wide">Sign in to your Account</h2>
                </div>
                <Button title="Google"
                login={true}
                loading={isLoading} 
                onClick={loginWithGoogle}/>
            </div>
        </div>
    </div>
    )
}

export default page