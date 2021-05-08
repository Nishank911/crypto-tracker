import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinSummaryPage from "./pages/CoinSummaryPage";
import Header from "./components/Header";
import SearchCrypto from "./components/SearchCrypto"
import "./App.css";
import { WatchListContextProvider } from "./context/watchListContext";

const App = () => {
  return (
    <div className="container-fluid main-body" >
      <WatchListContextProvider>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={SearchCrypto} />
          <Route path="/portfolio-tracker" component={CoinSummaryPage} />
          <Route path="/coins/:id" component={CoinDetailPage} />
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
};

export default App;
