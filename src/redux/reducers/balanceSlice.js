import { createSlice } from "@reduxjs/toolkit";
import { getBalance } from "../../apis/account"

const initialState = {
    balance: [],
    loading: false,
    error: null,
  };
  
  const balanceSlice = createSlice({
    name: "balance",
    initialState,
    reducers: {
      fetchBalanceStart: (state) => {
        state.loading = true;
        state.error = null;
      },
      fetchBalanceSuccess: (state, action) => {
        state.loading = false;
        state.balance = action.payload;
      },
      fetchBalanceFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });
  export const { fetchBalanceStart, fetchBalanceFailure, fetchBalanceSuccess } =
  balanceSlice.actions;
  export const fetchBalance = () => async (dispatch) => {
    dispatch(fetchBalanceStart());
    try {
      const balance = await getBalance();
      dispatch(fetchBalanceSuccess(balance));
    } catch (error) {
      dispatch(fetchBalanceFailure(error.message));
    }
  };
  export default balanceSlice.reducer;
