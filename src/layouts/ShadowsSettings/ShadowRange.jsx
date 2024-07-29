import { useDispatch } from "react-redux"
import { updateShadowValue } from "../../features/shadowsProperties"

export default function ShadowRange({inputData, shadowID}) {
	const dispatch = useDispatch()

	function handleInputs(e) {
		dispatch(updateShadowValue({
			inputNumber: inputData.inputNumber,
			value: e.target.value,
			shadowID
		}))
	}
	return (
		<div className="my-4">
			<div className="flex justify-between items-baseline">
				<p>{inputData.name}</p>
				<div className="flex items-baseline mb-2">
					<input
					value={inputData.value}
					onChange={handleInputs}
					className="w-14 h-8 mr-2 border border-gray-200 text-center"
					type="number"/>
					<p>px</p>
				</div>
			</div>
			<div className="relative z-0 w-full flex items-center">
				<input
				    value={inputData.value}
					onChange={handleInputs}
					type="range"
					min={inputData.minMax[0]}
					max={inputData.minMax[1]}
					className="w-full h-[2px] rounded-lg bg-gray-300 appearance-none cursor-pointer"
				/>
				<div className="absolute -z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-0.5 h-7 bg-gray-300"></div>
			</div>
		</div>
	)
}
