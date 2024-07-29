import { useState, useEffect } from "react"
import Chevron from "../../assets/chevron.svg"
import ShadowRange from "./ShadowRange"
import ColorPicker from "../ColorPicker"
import { removeShadow } from "../../features/shadowsProperties"
import { useDispatch } from "react-redux"
import Checkbox from "./Checkboxs"

export default function Shadow({shadowNumber, shadow}) {
	const [isExpanded, setExpanded] = useState(false)
	const dispatch = useDispatch()

	const shadowInputs = shadow.inputs.map((input, index) => {
		if (input.type === "range") {
			return <ShadowRange key={shadow.id} inputData={shadow.inputs[index]} shadowID={shadow.id}/>
		} else if (input.type === "color") {
			return <ColorPicker key={shadow.id} inputData={shadow.inputs[index]} shadowID={shadow.id}/>
		}
	})

	useEffect(() => {
		if(shadowNumber === 1) {
			setExpanded(true)
		} else {
			setExpanded(false)
		}
    }, [])

	return (
		<li className="bg-gray-50 border-b border-gray-300">
			<button className="px-6 py-4 flex justify-between items-center w-full hover:bg-gray-100"
			onClick={() => setExpanded(!isExpanded)}>
				<span>Shadow {shadowNumber}</span>
				<img 
				style={{
					transform: `${isExpanded ? "rotate(90deg)" : "rotate(0deg)"}`
				}}
				src={Chevron} alt="chevron" 
					className="font-bold w-5"
				/>
			</button>

			{isExpanded && <>
				<div className="flex items-end px-6 pt-4">
					<Checkbox name={"active"} shadowID={shadow.id}/>
					<Checkbox name={"inset"} shadowID={shadow.id}/>
					<button
					onClick={() => dispatch(removeShadow(shadow.id))}
					className="ml-auto text-sm bg-red-600 text-white hover:bg-red-700 rounded py-1 px-3">
					Remove
					</button>
				</div>
				<div className="px-6 py-4">
					{shadowInputs}
				</div>
			</>}
		</li>
	)
}