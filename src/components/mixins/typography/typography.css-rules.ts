import { COLOR_PALLETE } from './../../../themes/colors'
import { FONT_SIZES } from './../../../themes/font-size'
import { TypographyProps } from './typography.proptypes'

export const getFontWeightRule = ({ bold = false }: TypographyProps) =>
	`font-weight: ${bold ? '800' : '400'};}`

export const getFontSizeRule = ({ fontSize }: TypographyProps) =>
	`font-size: ${
		!fontSize
			? '16px'
			: typeof fontSize === 'number'
			? `${fontSize}px`
			: FONT_SIZES[fontSize]
	};`

export const getTextAlignmentRule = ({ align }: TypographyProps) =>
	`text-align: ${align};`

export const getFontColorRule = ({ fontColor }: TypographyProps) => `
	color: ${fontColor ? COLOR_PALLETE[fontColor] || fontColor : 'inherit'};
`

export const getTypographyRules = (props: TypographyProps) => `
	font-family: SFRounded, ui-rounded, "SF Pro Rounded", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	white-space: pre-wrap;
	${getFontWeightRule(props)}
	${getFontSizeRule(props)}
	${getTextAlignmentRule(props)}
	${getFontColorRule(props)}
`
