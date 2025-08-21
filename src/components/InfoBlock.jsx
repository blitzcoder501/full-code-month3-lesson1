const InfoBlock = props => {
	console.log(props.info)

	return (
		<>
			{/* React фрагмент */}
			<h3>{props.title}</h3>
			<ul>
				<li>{props.info[0]}</li>
				<li>{props.info[1]}</li>
				<li>{props.info[2]}</li>
			</ul>
		</>
	)
}

export default InfoBlock
