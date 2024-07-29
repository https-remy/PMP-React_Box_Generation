import { useState } from "react";
import { createPortal } from "react-dom";
import CodeResult from "./CodeResult";

export default function GetTheCodeBtn() {
	const [showCode, setShowCode] = useState(false);
	console.log("showCode", showCode);
	return (
		<>
			<button className="relative z-0 mx-auto shadow-md mt-2 py-1 px-3 text-sm 
			rounded bg-blue-600 text-white hover:bg-blue-700 
			cursor-pointer mb-2 "
			onClick={() => setShowCode(!showCode)}>
				Want the code ? Click me !
			</button>

			{showCode && 
				(createPortal(
					<CodeResult closeIt={() => setShowCode(!showCode)}/>, document.body))}
		</>
	);
}