import { COLOR_PALLETE } from './../../../themes/colors'
import { FONT_SIZES } from './../../../themes/font-size'
import { TypographyProps } from './typography.proptypes'

export const getFontWeightRule = ({ bold = false }: TypographyProps) =>
	`font-weight: ${bold ? '700' : '400'};}`

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
	color: ${fontColor ? COLOR_PALLETE[fontColor] : 'inherit'};
`

export const getTypographyRules = (props: TypographyProps) => `
	white-space: pre-wrap;
	${getFontWeightRule(props)}
	${getFontSizeRule(props)}
	${getTextAlignmentRule(props)}
	${getFontColorRule(props)}
`
