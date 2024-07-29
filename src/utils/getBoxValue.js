export default function getBoxValue(boxProperties) {
	let result = "";

	boxProperties.forEach(property => {
		if (property.name !== "background-color") {
			if (result === "") {
				result += `\n${property.name}: ${property.value}px;\n`;
			} else {
				result += `${property.name}: ${property.value}px;\n`;
			}
		} else {
			result += `${property.name}: ${property.value};`;
		}
    })
    return result;
}