import { createSlice } from "@reduxjs/toolkit";

// Define interface for the state
interface SidebarState {
	isOpen: boolean;
}

// Define initial state
const initialState: SidebarState = {
	isOpen: true,
};

const commonSlice = createSlice({
	name: "common",
	initialState,
	reducers: {
		// Toggle action
		toggleSideBar: (state) => {
			state.isOpen = !state.isOpen;
		},
	},
});

export const { toggleSideBar } = commonSlice.actions;
export default commonSlice.reducer;
