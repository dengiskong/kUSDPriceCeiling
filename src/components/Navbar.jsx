import "../index.css";
import {
  connectWallet,
  getActiveAccount,
  disconnectWallet,
} from "../utils/wallet";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [wallet, setWallet] = useState(null);

  const handleConnectWallet = async () => {
    const { wallet } = await connectWallet();
    setWallet(wallet);
  };
  const handleDisconnectWallet = async () => {
    const { wallet } = await disconnectWallet();
    setWallet(wallet);
  };

  useEffect(() => {
    const func = async () => {
      const account = await getActiveAccount();
      if (account) {
        setWallet(account.address);
      }
    };
    func();
  }, []);

  return (
    <nav className="bg-gray-800 h-14 flex items-center px-10 justify-between">
      <div>
      <div className="flex items-center space-x-4">
        <a href="#!" className="font-bold text-blue-500">
          kUSD Price Ceiling
        </a>
        <div>
        <img class="inline" src="logo45.png" alt="Logo"></img>
        </div>
        </div>
      </div>
      <div>
        <button
          onClick={wallet ? handleDisconnectWallet : handleConnectWallet}
          className="bg-purple-500 px-6 py-2 rounded-md text-xs font-semibold text-white cursor-pointer"
        >
          💳{" "}
          {wallet
            ? wallet.slice(0, 4) +
              "..." +
              wallet.slice(wallet.length - 4, wallet.length)
            : "Connect"}
        </button>
      </div>
    </nav>
  );
}
