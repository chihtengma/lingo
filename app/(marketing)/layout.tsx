import { Header } from "@/app/(marketing)/header";
import { Footer } from "@/app/(marketing)/footer";

type Props = {
   children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
   return (
      /*
       * All the children(page or route inside the marketing folder) components will have the same outer layout
       */
      <div className="min-h-screen flex flex-col">
         <Header />
         <main className="flex-1 flex flex-col items-center justify-center">
            {children}
         </main>
         <Footer/>
      </div>
   )
}

export default MarketingLayout;