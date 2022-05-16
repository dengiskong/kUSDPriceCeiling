import { useState } from "react";
import { walletsetSpread } from "../utils/wallet";

export default function SetSpreadAmount(props) {
  const [spreadinput, setspreadInput] = useState("");

  return (
    <div className="flex">
      <input
        type="number"
        placeholder="0.0"
        onChange={(e) => {
          setspreadInput(e.target.value);
        }}
        value={spreadinput}
      />
      <button
        onClick={() => {
          walletsetSpread(spreadinput);
        }}
        className="bg-blue-500 px-4 py-2 rounded-md text-xs uppercase text-white cursor-pointer">
        Set
      </button>
    </div>
  );
}
