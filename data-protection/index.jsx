import React from "react";
import { Navbar2 } from "../home/components/Navbar2";
import { Footer2 } from "../home/components/Footer2";
import { DataProtectionContent } from "./components/DataProtectionContent";

export default function Page() {
  return (
    <div>
      <Navbar2 />
      <DataProtectionContent />
      <Footer2 />
    </div>
  );
}
