import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Iproduct {
  id: string;
  title: string;
  img: string;
  price: number;
  quantity: number;
}

const initiaLState: Iproduct = {
  id: "",
  title: "",
  img: "",
  price: 0,
  quantity: 0,
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState: initiaLState,
  reducers: {
    setProduct: (state, action: PayloadAction<Iproduct>) => {
      return action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
