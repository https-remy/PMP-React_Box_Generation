import { useSelector, useDispatch } from "react-redux"
import { updateCheckBox } from "../../features/shadowsProperties"

export default function Checkboxs({name, shadowID}) {
	const dispatch = useDispatch()
	const checkboxState = useSelector(state => state.shadowsProperties.find(s => s.id === shadowID))

	return (
	<>
		<input 
		onChange={() => dispatch(updateCheckBox({ shadowID, name }))}
		type="checkbox"
		checked={checkboxState[name]} 
		id={`checkbox-${name}-${shadowID}`}
		className="h-4 w-4 border-gray-300 rounded mr-2"
		/>

		<label htmlFor={`checkbox-${name}-${shadowID}`}
		className="leading-4 mr-5">
			{name.charAt(0).toUpperCase() + name.slice(1)}
		</label>
	</>
  )
}
