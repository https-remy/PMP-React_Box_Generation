import { useSelector, useDispatch } from "react-redux"
import { addShadow } from "../../features/shadowsProperties"
import Shadows from "./Shadows"

export default function ShadowsSettings() {
	const shadows = useSelector(state => state.shadowsProperties)
	const dispatch = useDispatch()

	return (
		<div>
			<div className="flex justify-between p-6 border-b border-gray-300">
				<p className="font-bold text-lg">Custumize your shadows :</p>
				<button
				onClick={() => dispatch(addShadow())}
				className="py-1 px-3 text-sm rounded bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-1 hover:bg-blue-700 text-white">
				Add one
				</button>
			</div>
			<ul>
				{shadows.map((shadow, index) => (
					<Shadows shadowNumber={index + 1}
					shadow={shadow}
					key={shadow.id} />
				))}
			</ul>
		</div>
	)

}
