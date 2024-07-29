export default function getShadowValue(shadows) {
	let result = "";
	shadows.forEach(shadow => {
		if (shadow.active) {
			shadow.inputs.forEach(input => {
				if (input.type === "range") {
					result += `${input.value}px `
				} else if (input.type === "color") {
					result += `${input.value}`
				}
			})

			if (shadow.inset) {
				result += " inset";
			}

			if (shadows.indexOf(shadow) === shadows.length - 1) {
				result += ";";
			} else {
				result += ",";
			}
		}
	})
	return result;
}