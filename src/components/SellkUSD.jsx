import { useState } from "react";
import { walletsellkUSD } from "../utils/wallet";

export default function SellkUSD() {
  const [] = useState("");

  return (
    <div className="flex">
      
      <button
        onClick={() => {
          walletsellkUSD();
        }}
        className="bg-blue-500 px-6 py-3 rounded-md text-4xl font-semibold uppercase text-white cursor-pointer">
        Swap
      </button>
    </div>
  );
}
