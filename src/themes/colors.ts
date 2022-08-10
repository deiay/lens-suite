export type Color =
	| 'white'
	| 'background'
	| 'greyscale-black'
	| 'greyscale-dark'
	| 'greyscale-medium'
	| 'greyscale-light'
	| 'brand-primary-fg'
	| 'brand-primary-bg'
	| 'black'

export const COLOR_PALLETE: Record<Color, string> = {
	// Backgrounds
	white: '#ffffff',
	background: '#f9f8f7',
	black: '#25292E',

	// Greys
	'greyscale-black': '#403e3d',
	'greyscale-dark': '#73706e',
	'greyscale-medium': '#bfbdbb',
	'greyscale-light': '#e6e4e3',

	'brand-primary-fg': '#1cb0ff',
	'brand-primary-bg': '#07161f',
}
