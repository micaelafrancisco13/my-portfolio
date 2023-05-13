import { createTheme } from '@mui/material/styles'

const PRIMARY_TEXT_COLOR = '#D5DBDE'
const SECONDARY_TEXT_COLOR = '#FFF'

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			xxl: 1536,
		},
	},

	palette: {
		primary: { main: '#F7E19F' },
		secondary: { main: '#D5DBDE' },
		background: {
			light: '#4E5056',
			main: '#22252C',
			dark: '#17191E',
			contrastText: '#FFFFFF',
		},
		accent: {
			light: '#F8E7B2',
			main: '#F7E19F',
			dark: '#AC9D6F',
			contrastText: 'rgba(0, 0, 0, 0.87)',
		},
		text: {
			primary: PRIMARY_TEXT_COLOR,
			secondary: SECONDARY_TEXT_COLOR,
		},
	},

	typography: {
		htmlFontSize: 10,
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Fira Code"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),

		body1: {
			fontSize: '1.6rem',
			lineHeight: '25px',
			color: PRIMARY_TEXT_COLOR,
		},

		body2: {
			fontSize: '2rem',
			color: SECONDARY_TEXT_COLOR,
			'@media (min-width: 768px)': {
				fontSize: '2.4rem',
			},
		},

		h1: {
			color: 'white',
			fontSize: '2.9rem',
			fontWeight: 600,
			lineHeight: '42px',
			'@media (min-width: 640px)': {
				fontSize: '3rem',
			},
			'@media (min-width: 1280px)': {
				fontSize: '3.25rem',
			},
		},

		h2: {
			color: 'white',
			fontSize: '2.45rem',
			'@media (min-width: 640px)': {
				fontSize: '2.9rem',
			},
			'@media (min-width: 1280px)': {
				fontSize: '3.1rem',
			},
		},

		h3: {
			color: 'white',
			fontSize: '2.4rem',
		},
	},
})

export default theme
