export type BreakPoint = 'mobile' | 'tablet' | 'laptop' | 'desktop'

export const breakPoints: Array<BreakPoint> = [
	'mobile',
	'tablet',
	'laptop',
	'desktop',
]

export const breakPointSizes: { [k in BreakPoint]: number } = {
	mobile: 425,
	tablet: 768,
	laptop: 1024,
	desktop: 2560,
}

/**
 * @deprecated
 * Please use `mediaSelector` from `\@/compound` instead
 */
export const deviceMaximums: { [k in BreakPoint]: string } = {
	mobile: `(max-width: ${breakPointSizes.tablet}px)`,
	tablet: `(max-width: ${breakPointSizes.tablet}px)`,
	laptop: `(max-width: ${breakPointSizes.laptop}px)`,
	desktop: `(max-width: ${breakPointSizes.desktop}px)`,
}

/***
 * A css selector for applying styles with a mobile first approach.
 * Each breakpoint will apply styles to the given device and larger.
 * For example. Using mediaSelectors.tablet will apply styles to devices
 * with tablet size or larger
 */
export const mediaSelector: { [k in BreakPoint]: string } = {
	mobile: `(max-width: ${breakPointSizes.tablet - 1}px)`,
	tablet: `(min-width: ${breakPointSizes.tablet}px)`,
	laptop: `(min-width: ${breakPointSizes.laptop}px)`,
	desktop: `(min-width: ${breakPointSizes.desktop}px)`,
}
