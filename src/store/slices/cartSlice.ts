import { ApiError, ProductState } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productSlice";

const initialState: ProductState = {
	productsAll: [],
	favorites: [],
	cart: [],
	loading: false,
	error: null,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		resetCart: (state) => {
			state.cart = []
		},
		add: (state, action) => {
			state.cart.push(action.payload)
		},
		deleteFromCart: (state, action) => {
			state.cart = state.cart.filter(product => product.id !== action.payload)
		}
	},
	extraReducers(builder) {
		builder
			.addCase(getProducts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.productsAll = action.payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(getProducts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as ApiError;
			});
	},
})

export const { resetCart, add, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;