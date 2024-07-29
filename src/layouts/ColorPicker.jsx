import { useDispatch } from "react-redux"
import { updateBoxValue } from "../features/boxProperties"
import { updateShadowValue } from "../features/shadowsProperties"

export default function ColorPicker({inputData, shadowID}) {
	const dispatch = useDispatch()

	function handleInputs(e) {
		if (inputData.name === "background-color") {
			dispatch(updateBoxValue({
				inputNumber: inputData.inputNumber,
				value: e.target.value
			}))
		} else if (inputData.name === "Shadow Color") {
			dispatch(updateShadowValue({
                inputNumber: inputData.inputNumber,
                value: e.target.value,
				shadowID
            }))
		}
	}

	return (
	<div className="mt-3">
		<p>{inputData.name}</p>
		<div className="flex mt-2">
			<input
			className="flex-grow border py-1 px-2 focus:outline-1 outline-gray-400"
			type="text"
			value={inputData.value}
			onChange={handleInputs} />

			<input 
			className="cursor-pointer h-[40px]"
			type="color"
			value={inputData.value}
			onChange={handleInputs}/>
		</div>
	</div>
  )
}
