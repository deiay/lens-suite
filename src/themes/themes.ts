import { SPACING } from './spacing'
export type ThemeName = 'light' | 'dark'

export interface Theme {
	name: ThemeName
	pageBackground: string
	lightBackground: string
	mainTextColor: string
	mutedTextColor: string
	lightTextColor: string
	borderColor: string
	secondaryButtonColor: string
	primaryBlue: string
	primaryGreen: string
	primaryRed: string
	primaryYellow: string
	twitterBlue: string
	boxShadow: string
	lightBlue: string
	spacing: {
		s1: string
		s2: string
		s3: string
		s4: string
		s5: string
		s6: string
		s7: string
		s8: string
		s9: string
		s10: string
	}
}

export const lightTheme: Theme = {
	name: 'light',
	pageBackground: '#fff',
	lightBackground: '#F9F9F9',
	mainTextColor: '#191414',
	mutedTextColor: 'rgba(255, 255, 255, 0.6)',
	lightTextColor: '#707b8b',
	borderColor: '#eaeff1',
	secondaryButtonColor: '#dbe3e7',
	primaryBlue: '#1725eb',
	primaryGreen: '#3BB583',
	primaryRed: '#EC3F21',
	primaryYellow: 'rgb(28, 176, 255)',
	twitterBlue: '#4BA0EC',
	boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 24px -9px;',
	lightBlue: '#def6ff',
	spacing: SPACING,
}

export const darkTheme: Theme = {
	name: 'dark',
	pageBackground: '#000',
	lightBackground: '#181819',
	mainTextColor: '#F9F9F9',
	mutedTextColor: 'rgba(255, 255, 255, 0.6)',
	lightTextColor: '#b6b5b2',
	borderColor: '#272a30',
	secondaryButtonColor: '#2b2d31',
	primaryBlue: '#1725eb',
	primaryGreen: '#3BB583',
	primaryRed: '#EC3F21',
	primaryYellow: 'rgb(28, 176, 255)',
	twitterBlue: '#4BA0EC',
	boxShadow: 'rgba(0, 0, 0, 0.5) 0px 8px 24px -9px;',
	lightBlue: '#def6ff',
	spacing: SPACING,
}
