import React, { Suspense } from "react";
import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-white text-black">
        <Suspense>
          <Navbar />
        </Suspense>
        <div className="mt-20 flex-grow px-4 md:px-16 lg:px-32">
          <Suspense>{children}</Suspense>
        </div>
        <Suspense>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default LayoutProvider;
