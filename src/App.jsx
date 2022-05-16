import Navbar from "./components/Navbar";
import SellkUSD from "./components/SellkUSD";
import SetSpreadAmount from "./components/SetSpreadAmount";
import SetTokenPrecision from "./components/SetTokenPrecision";
import SetTradeAmount from "./components/SetTradeAmount";
import SetVolatilityTolerance from "./components/SetVolatilityTolerance";

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="container pt-10 mx-auto width-span">
        <div className="flex justify-center">
          <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 justify-center">
            Convert Token to XTZ
          </h3>
        </div>
        <div>
          <h3 className="text-2xl bg-clip-text text-white mt-10 flex justify-center">
            Sell kUSD if the price is too high
          </h3>
        </div>
        
        <div className="flex mt-5 justify-center">
          <SellkUSD />
        </div>
        
          <h3 className="text-xl bg-clip-text text-gray-400 mt-12 flex justify-center">
            Contract Controls
          </h3>

          <div>
            <div className="text-s bg-clip-text text-gray-400 mt-2 flex justify-center">
              <p>
                Set Spread Amount
              </p>
            </div>
          </div>
        <div className="flex mt-2 justify-center">
          <SetSpreadAmount />
        </div>

        <div className="text-s bg-clip-text text-gray-400 mt-8 flex justify-center">
          <p>
            Set Token Precision
          </p>
        </div>
        <div className="flex mt-2 justify-center">
          <SetTokenPrecision />
        </div>

        <div className="text-s bg-clip-text text-gray-400 mt-8 flex justify-center">
          <p>
            Set Trade Amount
          </p>
        </div>
        <div className="flex mt-2 justify-center">
         <SetTradeAmount />
        </div>

        <div className="text-s bg-clip-text text-gray-400 mt-8 flex justify-center">
          <p>
            Set Volatility Tolerance
          </p>
        </div>
          <div className="flex mt-2 justify-center">
            <SetVolatilityTolerance />
          </div>
        </div>
    </div>
  );
};

export default App;
