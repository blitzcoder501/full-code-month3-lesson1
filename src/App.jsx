import Button from './components/Button/Button'
import Footer from './components/Footer'
import Header from './components/Header'
import InfoBlock from './components/InfoBlock'

function App() {
	const handleClick = content => {
		console.log(content)
	}

	return (
		<div className='wrapper'>
			<Header />

			<main>
				<h1>React - библиотека для создание веб приложений</h1>

				<InfoBlock title='Title 1' info={['item 1', 'item 2', 'item 3']} />
				<InfoBlock title='Title 2' info={['item 4', 'item 5', 'item 6']} />

				<Button buttonClicked={handleClick}>Button 1</Button>
				<Button buttonClicked={handleClick}>Button 2</Button>
				<Button buttonClicked={handleClick}>Button 3</Button>

				<div style={{ margin: '30px 0' }}>Нажмите на кнопку</div>
			</main>

			<Footer />
		</div>
	)
}

export default App
