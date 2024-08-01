const cssToTailwindMap = {
	'border-radius': 'rounded',
	'height': 'h',
	'width': 'w',
	'background-color': 'bg',
};

export default function cssToTailwind(css) {
    const lines = css.split('\n').map(line => line.trim()).filter(line => line.length > 0);
	const linesCleaned = lines.map(line => line.split(';').join(' '));
    const tailwindClasses = linesCleaned.map(line => convertLine(line, cssToTailwindMap)).filter(className => className.length > 0);

    return tailwindClasses.join(' ');
}

function convertLine(line, cssToTailwindMap) {
    const [property, value] = line.split(':').map(item => item.trim());

    if (cssToTailwindMap[property]) {
        const tailwindClassPrefix = cssToTailwindMap[property];
        let tailwindValue = value.replace(/px|;/g, '').trim(); 

        if (property === 'background-color') {
            tailwindValue = value.replace('#', '');
            return `${tailwindClassPrefix}-[\"#${tailwindValue}\"]`;

        }
        return `${tailwindClassPrefix}-${tailwindValue}`;
    }
    return '';
}