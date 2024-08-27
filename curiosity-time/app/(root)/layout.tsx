import LeftSidebar from "@/components/leftSidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* ............ podcasts all ui's functions .............. */}
        <main>
          {/* for left side portion */}
        <LeftSidebar></LeftSidebar>
            {children}
           <p className="text-white">RIGHT SIDEBAR</p>

        </main>
    </div>
  );
}
