import React from "react";
import { Navbar2 } from "../home/components/Navbar2";
import { Footer2 } from "../home/components/Footer2";
import { ImprintContent } from "./components/ImprintContent";

export default function Page() {
  return (
    <div>
      <Navbar2 />
      <ImprintContent />
      <Footer2 />
    </div>
  );
}
