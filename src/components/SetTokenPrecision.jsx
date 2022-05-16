import { useState } from "react";
import { walletsetTokenPrecision } from "../utils/wallet";

export default function SetTokenPrecision(props) {
  const [precisionInput, setprecision] = useState("");

  return (
    <div className="flex">
      <input
        type="number"
        placeholder="0.0"
        onChange={(e) => {
          setprecision(e.target.value);
        }}
        value={precisionInput}
      />
      <button
        onClick={() => {
          walletsetTokenPrecision(precisionInput);
        }}
        className="bg-blue-500 px-4 py-2 rounded-md text-xs uppercase text-white cursor-pointer">
        Set
      </button>
    </div>
  );
}
