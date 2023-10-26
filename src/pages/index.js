'use client'

import { VeltProvider, VeltHuddle, VeltComments, VeltPresence } from "@veltdev/react";
import YourAuthComponent from "../components/YourAuthComponent";
import YourDocument from "../components/YourDocument.js";

export default function App() {
  return (
    <VeltProvider apiKey="j3AwoBkuQMTEgeqrmPve">
      <VeltComments/>
      <VeltHuddle/>
      <div className="flex w-screen justify-center">
        <YourDocument />
      </div>
    </VeltProvider>
  );
}
