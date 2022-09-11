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

export type ListBooksItemsType = {
	id: number;
	title: string;
	statement: string;
	regular_price: {
		currency: string;
		value: number;
	};
	image: string;
};

export type ListBooksCommentsType = {
	id: number;
	name: string;
	text: string;
	evaluation: number;
	comment: string;
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

const preloadedListBooksState = {
	listBooks: null as Array<ListBooksItemsType> | null | string,
};

export const fetchBooks = createAsyncThunk("listBooks/fetchBooks", async (arg: string, { rejectWithValue }) => {
	const response = await fetch(arg);
	const ret = await response.json();
	return ret;
});

export const fetchComments = createAsyncThunk("listComments/fetchComments", async (arg: string, { rejectWithValue }) => {
	const response = await fetch(arg);
	const ret = await response.json();
	return ret;
});

const listBooksSlice = createSlice({
	name: "listBooks",
	initialState: preloadedListBooksState,
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
			.addCase(fetchBooks.rejected, (state, _) => {
				state.listBooks = "error";
			});
	},
});

const preloadedListCommentsState = {
	listComments: null as Array<ListBooksCommentsType> | null | string,
};

const listCommentsSlice = createSlice({
	name: "listComments",
	initialState: preloadedListCommentsState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchComments.fulfilled, (state, action) => {
				state.listComments = action.payload;
			})
			.addCase(fetchComments.rejected, (state, _) => {
				state.listComments = "error";
			});
	},
});

export const store = configureStore({
	reducer: {
		listBookReducer: listBooksSlice.reducer,
		listCommentsReducer: listCommentsSlice.reducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
function rejectWithValue(): any {
	throw new Error("Function not implemented.");
}
