import { useState } from "react";
import { walletsetTradeAmount } from "../utils/wallet";

export default function SetTradeAmount(props) {
  const [tradeamountinput, settradeamount] = useState("");

  return (
    <div className="flex">
      <input
        type="number"
        placeholder="0.0"
        onChange={(e) => {
          settradeamount(e.target.value);
        }}
        value={tradeamountinput}
      />
      <button
        onClick={() => {
          walletsetTradeAmount(tradeamountinput);
        }}
        className="bg-blue-500 px-4 py-2 rounded-md text-xs uppercase text-white cursor-pointer">
        Set
      </button>
    </div>
  );
}
