import Image from "next/image";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
   const SIGN_IN_URL = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL;
   const SIGN_UP_URL = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL;
   return (
      /*
       * lg:max-w-screen-lg: On large screens and above, the max width of the element will be constrained to 1024px.
       * mx-auto: Applies margin-left: auto and margin-right: auto to the element. This centers the element horizontally within it container.
       */
      <header className="h-20 w-full border-b-2 border-slate-200 px-4">
         <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
            <div className="p-8  pl-4 pb-7 flex items-center gap-x-3">
               <Image src="/mascot.svg" height={40} width={40} alt="Mascot"/>
               <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
                  Lingo
               </h1>
            </div>
            <ClerkLoading>
               <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
            </ClerkLoading>
            <ClerkLoaded>
               <SignedIn>
                  <UserButton/>
               </SignedIn>
               <SignedOut>
                  <SignInButton mode="modal" forceRedirectUrl={SIGN_IN_URL} signUpForceRedirectUrl={SIGN_UP_URL}>
                     <Button size="lg" variant="ghost">Login</Button>
                  </SignInButton>
               </SignedOut>
            </ClerkLoaded>
         </div>
      </header>
   )
}