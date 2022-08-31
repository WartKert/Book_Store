import {
	configureStore,
	ThunkAction,
	Action,
	createReducer,
	createAction,
	createSlice,
	createAsyncThunk,
	PayloadAction,
} from "@reduxjs/toolkit";
import { rejects } from "assert";

type ListBooksItemsType = {
	id: number;
	statement: string;
	regular_price: {
		currency: string;
		value: number;
	};
	image: string;
};

// const addBookToListBooks = createAction<ListBooksItemsType>('store/add_book');
// const reducer = createReducer(null as ListBooksItemsType[] | null, (builder) => {
// 	builder.addCase(addBookToListBooks, (state, action) => {
// 		state = null;
// 	})
// 		.addMatcher(
// 			(action): action is ListBooksItemsType[] => action,
// 			(state, action) => {
// 				state?.push(action.payload);
// 			}
// 		)
// });

const preloadedState = {
	listBooks: null as Array<ListBooksItemsType> | null | string,
};

export const fetchBooks = createAsyncThunk("listBooks/fetchBooks", async (arg: string, { rejectWithValue }) => {
	const response = await fetch(arg);

	const te = await response.json();
	// debugger;
	return te;
});

const listBooksSlice = createSlice({
	name: "listBooks",
	initialState: preloadedState,
	reducers: {
		addBookToListBooks: (state, action: PayloadAction<ListBooksItemsType>) => {
			if (state.listBooks) {
				// state.listBooks.push(action.payload);
			} else {
				state.listBooks = [action.payload];
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchBooks.fulfilled, (state, action) => {
				state.listBooks = action.payload;
			})
			.addCase(fetchBooks.rejected, (state, action) => {
				state.listBooks = "error";
			});
	},
});

export const store = configureStore({
	reducer: {
		listBookReducer: listBooksSlice.reducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
function rejectWithValue(): any {
	throw new Error("Function not implemented.");
}
