import React from 'react'

export default function Todo({thingtodo}) {
	return (
		<div>
			<label>
				<input type="checkbox" checked={thingtodo.checked} />
				{thingtodo.name}
			</label>
		</div>
		)
}