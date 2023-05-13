import React from 'react'

const OutlinedBox = ({ large }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={!large ? '52' : '86'}
			height={!large ? '52' : '86'}
			fill="none"
			viewBox="0 0 86 86"
		>
			<path stroke="#D5DBDE" d="M0.5 0.5H85.5V85.5H0.5z"></path>
		</svg>
	)
}

export default OutlinedBox
