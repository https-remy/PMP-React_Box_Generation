import { useSelector } from "react-redux";
import GetTheCodeBtn from "./GetTheCode/GetTheCodeBtn"
import getShadowValue from "../../utils/getShadowValue";

export default function Preview() {
	const boxState = useSelector(state => state.boxProperties);
	const shadowState = useSelector(state => state.shadowsProperties);

	return (
		<div className="flex flex-col p-5 ml-10 lg:ml-28">
			<GetTheCodeBtn />
			<div className="w-[250px] h-[250px] bg-white rounded-xl mb-20 lg:mb-40"
			style={{
				boxShadow: `${getShadowValue(shadowState).slice(0, -1)}`,
				borderRadius: `${boxState[0].value}px`,
				height: `${boxState[1].value}px`,
				width: `${boxState[2].value}px`,
				backgroundColor: `${boxState[3].value}`,
			}}>

			</div>
		</div>
	);
}


