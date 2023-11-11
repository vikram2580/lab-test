import React, { useLayoutEffect } from "react";
import { ROUTES } from "./routes";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { WalletPage, TransactionsPage, AddressesPage,HomePage } from "../pages";
import TransferForm from "../components/TransferForm";
import Navbar from "../components/Navbar";

  const Router = ({transactions,setTransactions,addresses}) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path={ROUTES.APP} element={<HomePage />} />
        <Route path={ROUTES.WALLET} element={<WalletPage addresses={addresses} />} />
        <Route path={ROUTES.TRANSECTIONS} element={<TransactionsPage transactions={transactions} />} />
        <Route path={ROUTES.ADDRESSES} element={<AddressesPage addresses={addresses}/>} />
        <Route path={ROUTES.TRANSFER} element={<TransferForm setTransactions={setTransactions} addresses={addresses} />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
