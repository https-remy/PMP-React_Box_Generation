import getShadowValue from "../../../utils/getShadowValue.js";
import getBoxValue from "../../../utils/getBoxValue.js";
import cssToTailwind from "../../../utils/cssToTailwind.js";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


export default function CodeResult({closeIt}) {
	const boxState = useSelector(state => state.boxProperties);
	const shadowState = useSelector(state => state.shadowsProperties);

	const css = getBoxValue(boxState) + '\nbox-shadow: ' + getShadowValue(shadowState);
    const tailwind = cssToTailwind(css);


	useEffect(() => {
        document.body.style.overflow = "hidden";

		return () => {
            document.body.style.overflow = "auto";
        }
    }, []);

	const [isCopied, setIsCopied] = useState(false);
	const [isCss, setIsCss] = useState(true);

	function handleCopy (e) {
		if (!isCopied) {
			setIsCopied(true);
			e.target.textContent = "Copied";

			setTimeout(() => {
				e.target.textContent = "Copy";
				setIsCopied(false);
			}, 1250)
		}
		const textToCopy = isCss ? css : tailwind;
        navigator.clipboard.writeText(textToCopy);
	}

	function handleCodeDisplay(e) {
        setIsCss(!isCss);
        e.target.textContent = isCss ? "Tailwind" : "CSS";
	}

	return (
		<div 
		onClick={closeIt}
		className="fixed z-10 inset-0 flex items-center justify-center bg-gray-600/75">
			<div onClick={e => e.stopPropagation()}
			className="max-w-[450px] rounded p-7 bg-gray-50 mb-[10vh]">

				<div className="flex items-end mb-5">
					<p className="font-semibold mr-5">Your code below 👇🏼</p>
					<button 
					onClick={(e) => handleCodeDisplay(e)}
					className="ml-auto mr-2 text-sm bg-green-600 text-white hover:bg-green-700 py-1 px-3 rounded">
						CSS
					</button>

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
				{isCss ? (
							<>
								<span className="font-semibold">box-shadow : </span><span>{getShadowValue(shadowState)}</span><br />
								<span className="font-semibold">border-radius : </span><span>{`${boxState[0].value}px`}</span><br />
								<span className="font-semibold">height : </span><span>{`${boxState[1].value}px`}</span><br />
								<span className="font-semibold">width : </span><span>{`${boxState[2].value}px`}</span><br />
								<span className="font-semibold">background-color : </span><span>{`${boxState[3].value}`}</span><br />
							</>
                    	) : (
							<>
								<span className="font-semibold">className =</span>{"\"" + tailwind + "\""}<br /><br />
								<p className="italic">For the box value you must create a custom shadow properties in your tailwind.config, here is your value for your shadow(s) : {"\"" + getShadowValue(shadowState) + "\""}</p>
							</>
                    )}
				</p>
			</div>
		</div>
	);
}