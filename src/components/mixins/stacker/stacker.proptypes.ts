import { BreakPoint } from '../../utils/breakpoints'

export type StackedVariantKey = 'row' | 'column'

export type JustifyVariantKey =
	| 'start'
	| 'end'
	| 'center'
	| 'space-between'
	| 'space-around'
	| 'space-evenly'

export type AlignVariantKey = 'start' | 'end' | 'center' | 'stretch'

type ResponsiveStackedVariant = {
	[breakpoint in BreakPoint]?: StackedVariantKey
}

type ResponsiveJustifyVariant = {
	[breakpoint in BreakPoint]?: JustifyVariantKey
}

type ResponsiveAlignVariant = {
	[breakpoint in BreakPoint]?: AlignVariantKey
}

export interface StackerProps {
	stacked?: StackedVariantKey | ResponsiveStackedVariant
	justify?: JustifyVariantKey | ResponsiveJustifyVariant
	align?: AlignVariantKey | ResponsiveAlignVariant
	wrap?: boolean | BreakPoint[]
}

export interface StackedOptions {
	stacked?: StackedVariantKey
	justify?: JustifyVariantKey
	align?: AlignVariantKey
	wrap?: boolean
}
