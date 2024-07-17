import Image from "next/image";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
   const SIGN_IN_URL = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL;
   const SIGN_UP_URL = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL;

   return (
      <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
         <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
            <Image src="/hero.svg" fill alt="hero"/>
         </div>
         <div className="flex flex-col items-center gap-y-8">
            <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
               Learn, practice, and master new languages with Lingo.
            </h1>
            <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
               {/* Spin animation when loading */}
               <ClerkLoading>
                  <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
               </ClerkLoading>
               <ClerkLoaded>
                  {/* If user is not signed in */}
                  <SignedOut>
                     <SignUpButton mode="modal" forceRedirectUrl={SIGN_UP_URL} signInForceRedirectUrl={SIGN_IN_URL}>
                        <Button size="lg" variant="secondary" className="w-full">Get Started</Button>
                     </SignUpButton>
                     <SignInButton mode="modal" forceRedirectUrl={SIGN_IN_URL} signUpForceRedirectUrl={SIGN_UP_URL}>
                        <Button size="lg" variant="primaryOutline" className="w-full">I already have an account</Button>
                     </SignInButton>
                  </SignedOut>
                  {/* If user signed in */}
                  <SignedIn>
                     <Button size="lg" variant="secondary" className="w-full" asChild>
                        <Link href="/learn">
                           Continue Learning
                        </Link>
                     </Button>
                  </SignedIn>
               </ClerkLoaded>
            </div>
         </div>
      </div>
   )
}