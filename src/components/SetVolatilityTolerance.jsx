import { useState } from "react";
import { walletsetVolatilityTolerance } from "../utils/wallet";

export default function SetVolatilityTolerance(props) {
  const [volatilityinput, setvolatility] = useState("");

  return (
    <div className="flex">
      <input
        type="number"
        placeholder="0.0"
        onChange={(e) => {
          setvolatility(e.target.value);
        }}
        value={volatilityinput}
      />
      <button
        onClick={() => {
          walletsetVolatilityTolerance(volatilityinput);
        }}
        className="bg-blue-500 px-4 py-2 rounded-md text-xs uppercase text-white cursor-pointer">
        Set
      </button>
    </div>
  );
}
