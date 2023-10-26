import { useVeltClient, VeltCommentTool, VeltPresence, VeltHuddleTool,VeltHuddle } from "@veltdev/react";
import { useEffect, useState } from "react";
import YourAuthComponent from "./YourAuthComponent";

export default function YourDocument() {
  // Get the Velt client
  const { client } = useVeltClient();
  let [selected,setSelected] = useState(0)



  let [color,setColor] = useState("linear-gradient(#010022,#000000)")

  useEffect(() => {
    if (client) {
      // Set a document ID
      client.setDocumentId("unique-document-id");
    }
  }, [client]);

  return (
    <div class="text-white flex h-screen w-screen items-center justify-center" style={{background:`${color}`}}>
        
    <div class="relative flex w-[40rem] flex-col justify-center overflow-hidden rounded-lg bg-[#404040] bg-opacity-30 py-32">
        
        <div className="mb-[64px] flex justify-center">
            <VeltPresence flockMode={true}/>
        </div>
       <div class="flex flex-col items-center">
            <YourAuthComponent/>
        <h1 class="text-[32px] font-medium ">Tap <span className="text-[#908bff]">comment</span> to get started</h1>
  
        <div class="text-center">
            <div className="m-[32px]">
            <p className="font-bold m-4 text-[12px]">COMMENT MODE</p>
                <div className="flex justify-center">
                    <div className="bg-opacity-40 bg-[#404040] w-[32px] h-[32px] rounded-full">
                    <VeltCommentTool/>

                    </div>
                </div>
            </div>
          <div className="m-[32px]">
          <p className="font-bold m-4 text-[12px]">HUDDLE MODE</p>
            <div className="flex justify-center">
                <div className="bg-opacity-40 bg-[#404040] w-[32px] h-[32px] rounded-full">
                <VeltHuddleTool/>

                </div>
            </div>
          </div>

          <h1 class="text-[20px] mt-[20px] mb-[60px] font-light">Highlight this text to add a comment</h1>

       

          
          
          
        </div>
  
  
            <a href="https://vercel.com/new/clone?repository-url=https://github.com/Snippyly-Docs/nextconf-demo-velt"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>
      </div>
    </div>
  </div>
  );
}
