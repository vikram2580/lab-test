import { createSlice } from "@reduxjs/toolkit";
import { getAddresses } from "../../apis/account";

const initialState = {
  addresses: [],
  loading: false,
  error: null,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    fetchAddressesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchAddressesSuccess: (state, action) => {
      state.loading = false;
      state.addresses = action.payload;
    },
    fetchAddressesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchAddressesStart,
  fetchAddressesSuccess,
  fetchAddressesFailure,
} = addressSlice.actions;


export const fetchAddresses = () => async (dispatch) => {
  dispatch(fetchAddressesStart());
  try {
    const addresses = await getAddresses();
    dispatch(fetchAddressesSuccess(addresses));
  } catch (error) {
    dispatch(fetchAddressesFailure(error.message));
  }
};

export default addressSlice.reducer;
