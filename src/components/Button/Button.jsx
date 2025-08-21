import './Button.css'

function Button(props) {
	return (
		<button
			className='button'
			onClick={() => props.buttonClicked(props.children)}
		>
			{props.children}
		</button>
	)
}

export default Button
