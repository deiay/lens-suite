import { SpaceProps } from '../../mixins/spacing'
import { StackeeProps } from '../../mixins/stackee'
import { StackerProps } from '../../mixins/stacker'
import { ContainerProps } from '../../mixins/container'

export interface BoxProps
	extends ContainerProps,
		StackerProps,
		StackeeProps,
		SpaceProps {
	onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
	overflow?: 'visible' | 'hidden' | 'scroll' | 'auto'
	gap?: string
}
