import LeftSidebar from "@/components/sidebars/leftSidebar";
import Image from "next/image";
import MobileNav from "@/components/responsiveness/mobilenav";
import RightSidebar from "@/components/sidebars/rightsidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      {/* ............ podcasts all ui's functions .............. */}
        <main className="relative flex bg-black-3">
          {/* for left side portion */}
        <LeftSidebar></LeftSidebar>
        <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-14">
          <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
            <div className="flex h-16 items-center justify-between md:hidden">
              <Image
                src="/icons/logo.svg"
                width={30}
                height={30}
                alt="menu icon"
              />
              <MobileNav />
            </div>
            <div className="flex flex-col md:pb-14">
              toster for notifications
            {children}
            
            </div>
          </div>
        </section>
        <RightSidebar></RightSidebar>

        </main>
    </div>
  );
}
