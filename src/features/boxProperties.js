import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
	{
		inputNumber: 1,
		name: "border-radius",
		value: 25,
		type: "range",
        minMax: [0, 250],
		slice: "boxProperties",
	},
	{
		inputNumber: 2,
        name: "height",
        value: 250,
        type: "range",
        minMax: [0, 500],
        slice: "boxProperties"
	},
	{
		inputNumber: 3,
        name: "width",
        value: 250,
        type: "range",
        minMax: [0, 500],
        slice: "boxProperties"
	},
	{
		inputNumber: 4,
        name: "background-color",
        value: "#fff",
        type: "color",
        slice: "boxProperties"
	}
];

export const boxPropertiesSlice = createSlice({
	name: "boxProperties",
	initialState,
    reducers: {
		updateBoxValue: (state, action) => {
			state.find(el => el.inputNumber === action.payload.inputNumber).value = action.payload.value;
		},
	}
})
export const { updateBoxValue } = boxPropertiesSlice.actions;
export default boxPropertiesSlice.reducer;