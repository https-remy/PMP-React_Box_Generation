import getShadowValue from "../../../utils/getShadowValue.js";
import getBoxValue from "../../../utils/getBoxValue.js"
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function CodeResult({closeIt}) {
	const boxState = useSelector(state => state.boxProperties);
	const shadowState = useSelector(state => state.shadowsProperties);

	useEffect(() => {
        document.body.style.overflow = "hidden";

		return () => {
            document.body.style.overflow = "auto";
        }
    }, []);

	let isCopied = false;

	function handleCopy (e) {
		if (!isCopied) {
			isCopied = true;
			e.target.textContent = "Copied !";

			setTimeout(() => {
				e.target.textContent = "Copy";
                isCopied = false;
			}, 1250)
		}
		navigator.clipboard.writeText(`box-shadow : ${getShadowValue(shadowState) + getBoxValue(boxState)}`);
	}

	return (
		<div 
		onClick={closeIt}
		className="fixed z-10 inset-0 flex items-center justify-center bg-gray-600/75">
			<div onClick={e => e.stopPropagation()}
			className="max-w-[450px] rounded p-7 bg-gray-50 mb-[10vh]">

				<div className="flex items-end mb-5">
					<p className="font-semibold mr-5">Here is your CSS 🎉</p>
					<button 
					onClick={(e) => handleCopy(e)}
					className="ml-auto mr-2 text-sm bg-blue-600 text-white hover:bg-blue-700 py-1 px-3 rounded">
						Copy
					</button>

					<button 
					onClick={closeIt}
					className="mr-2 text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded">
						Close
					</button>
				</div>

				<p className="rounded bg-gray-200 p-5">
					<span className="font-semibold">box-shadow : </span><span>{getShadowValue(shadowState)}</span><br />
					<span className="font-semibold">border-radius : </span><span>{`${boxState[0].value}px`}</span><br />
					<span className="font-semibold">height : </span><span>{`${boxState[1].value}px`}</span><br />
					<span className="font-semibold">width : </span><span>{`${boxState[2].value}px`}</span><br />
					<span className="font-semibold">background-color : </span><span>{`${boxState[3].value}`}</span>
				</p>
			</div>
		</div>
	);
}