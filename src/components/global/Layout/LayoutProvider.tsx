import React, { Suspense } from "react";
import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Suspense>
        <Navbar />
      </Suspense>
      <Suspense>{children}</Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
};

export default LayoutProvider;
