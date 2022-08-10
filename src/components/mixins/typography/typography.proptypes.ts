import { Color } from '../../../themes/colors'
import { FontSizeKey } from '../../../themes/font-size'

type Alignment = 'left' | 'center' | 'right'
export interface TypographyProps {
	bold?: boolean
	fontSize?: FontSizeKey | number
	align?: Alignment
	fontColor?: Color | string
}
