import Footer from './components/Footer'
import Header from './components/Header'

function App() {
	return (
		<div className='wrapper'>
			<Header />

			<main>
				<h1>React - библиотека для создание веб приложений</h1>
				<h3>Преимущество</h3>
				<ul>
					<li>Компонентный подход</li>
					<li>Переиспользуемость</li>
					<li>Проще разрабатывать приложение</li>
				</ul>
				<h3>Недостакты</h3>
				<ul>
					<li>Компонентный подход</li>
					<li>Переиспользуемость</li>
					<li>Проще разрабатывать приложение</li>
				</ul>
			</main>

			<Footer />
		</div>
	)
}

export default App
