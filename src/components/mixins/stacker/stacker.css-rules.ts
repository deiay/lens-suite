import { BreakPoint, breakPoints, mediaSelector } from '../../utils/breakpoints'
import { StackerProps, StackedOptions } from './stacker.proptypes'

const JUSTIFY_CONTENT_MAP = {
	start: 'flex-start',
	end: 'flex-end',
	center: 'center',
	'space-between': 'space-between',
	'space-around': 'space-around',
	'space-evenly': 'space-evenly',
}

const DEFAULT_ALIGN = 'stretch'

const DEFAULT_JUSTIFY = 'flex-start'

const ALIGN_CONTENT_MAP = {
	start: 'flex-start',
	end: 'flex-end',
	center: 'center',
	stretch: 'stretch',
}

const getStackerOptions = ({
	stacked,
	justify,
	align,
	wrap,
}: StackedOptions): string => {
	if (!stacked) {
		return ''
	}

	const rules = [
		'display: flex;',
		`flex-direction: ${stacked === 'column' ? 'column' : 'row'};`,
		`justify-content: ${
			justify ? JUSTIFY_CONTENT_MAP[justify] : DEFAULT_JUSTIFY
		};`,
		`align-items: ${align ? ALIGN_CONTENT_MAP[align] : DEFAULT_ALIGN};`,
	]

	if (wrap) {
		rules.push('flex-wrap: wrap;')
	}

	return rules.join(' ')
}

export const getStackerRules = (stackerProps: StackerProps): string => {
	const rules = []

	const globalOptions: StackedOptions = {
		stacked:
			typeof stackerProps.stacked === 'string'
				? stackerProps.stacked
				: undefined,
		align:
			typeof stackerProps.align === 'string' ? stackerProps.align : undefined,
		justify:
			typeof stackerProps.justify === 'string'
				? stackerProps.justify
				: undefined,
		wrap: Array.isArray(stackerProps.wrap) ? undefined : stackerProps.wrap,
	}
	rules.push(getStackerOptions(globalOptions))
	const optionsByBreakpoint: {
		[k in BreakPoint]: StackedOptions
	} = breakPoints.reduce<{
		[k in BreakPoint]: StackedOptions
	}>(
		(acc, bp) => {
			acc[bp] = {
				stacked:
					stackerProps.stacked instanceof Object
						? stackerProps.stacked?.[bp]
						: undefined,
				align:
					stackerProps.align instanceof Object
						? stackerProps.align?.[bp]
						: undefined,
				justify:
					stackerProps.justify instanceof Object
						? stackerProps.justify?.[bp]
						: undefined,
				wrap: Array.isArray(stackerProps.wrap)
					? stackerProps.wrap.includes(bp)
					: undefined,
			}
			return acc
		},
		{
			mobile: {},
			tablet: {},
			laptop: {},
			desktop: {},
		}
	)

	if (optionsByBreakpoint.mobile.stacked) {
		rules.push(
			`@media ${mediaSelector.mobile} {${getStackerOptions(
				optionsByBreakpoint.mobile
			)}}`
		)
	}

	if (optionsByBreakpoint.tablet.stacked) {
		rules.push(
			`@media ${mediaSelector.tablet} {${getStackerOptions(
				optionsByBreakpoint.tablet
			)}}`
		)
	}

	if (optionsByBreakpoint.laptop.stacked) {
		rules.push(
			`@media ${mediaSelector.laptop} {${getStackerOptions(
				optionsByBreakpoint.laptop
			)}}`
		)
	}

	if (optionsByBreakpoint.desktop.stacked) {
		rules.push(
			`@media ${mediaSelector.desktop} {${getStackerOptions(
				optionsByBreakpoint.desktop
			)}}`
		)
	}

	return rules.join('\n')
}
