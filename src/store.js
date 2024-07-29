import { configureStore } from "@reduxjs/toolkit"
import shadowsProperties from "./features/shadowsProperties"
import boxProperties from "./features/boxProperties"

export const store = configureStore({
	reducer: {
		shadowsProperties,
		boxProperties,
	}
})