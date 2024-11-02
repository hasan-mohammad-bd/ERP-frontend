import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define interface for BulkAction and EmployeeColumn as needed
interface BulkAction<T> {
  action: string;
  payload: T[];
}

interface EmployeeColumn {
  // Define fields based on your EmployeeColumn structure
}

// Define the interface for the state
interface SidebarState {
  isOpen: boolean;
  selectedEmployeeAction: BulkAction<EmployeeColumn>;
}

// Define initial state
const initialState: SidebarState = {
  isOpen: true,
  selectedEmployeeAction: { action: "", payload: [] },
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    // Toggle action
    toggleSideBar: (state) => {
      state.isOpen = !state.isOpen;
    },
    // Update selectedEmployeeAction
    setSelectedEmployeeAction: (state, action: PayloadAction<BulkAction<EmployeeColumn>>) => {
      state.selectedEmployeeAction = action.payload;
    },
  },
});

export const { toggleSideBar, setSelectedEmployeeAction } = commonSlice.actions;
export default commonSlice.reducer;
