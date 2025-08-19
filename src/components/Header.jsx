function Header() {
	const now = new Date()

	console.log(now)

	return (
		<header>
			<span>Learn React</span>
			<div>Сейчас время: {now.toLocaleTimeString()}</div>
		</header>
	)
}

export default Header
