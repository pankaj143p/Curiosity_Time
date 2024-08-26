

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <main>
            <p className="text-white" >LEFT SIDEBAR</p>
         
            {children}
           <p className="text-white">RIGHT SIDEBAR</p>

        </main>
    </div>
  );
}
