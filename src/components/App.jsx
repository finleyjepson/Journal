import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
// Components
import Home from './Home'
import NewEntry from './NewEntry'
import CategorySelection from './CategorySelection'
import NavBar from './NavBar'
import ShowEntry from './ShowEntry'

function App() {
	const [categories, setCategories] = useState([])
	const [entries, setEntries] = useState([])

	useEffect(() => {
		fetch(`http://127.0.0.1:4000/categories`)
			.then(response => response.json())
			.then(data => setCategories(data))

		fetch(`http://127.0.0.1:4000/entries`)
			.then(response => response.json())
			.then(data => setEntries(data))
	}, [])

	async function addEntry(cat_id, content) {
		const newId = entries.length
		const newEntry = {
			category: categories[cat_id]._id,
			content: content
		}
		// post new entry to api
		const res = await fetch(`http://127.0.0.1:4000/entries`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newEntry)
		})
		const data = await res.json()
		setEntries([...entries, data])
		return newId
	}

	function ShowEntryWrapper() {
		const { id } = useParams()
		return <ShowEntry entry={entries[id]} setEntries={setEntries} />
	}

	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home entries={entries} />} />
					<Route path='/category' element={<CategorySelection categories={categories} />} />
					<Route path='/entry'>
						<Route path=":id" element={<ShowEntryWrapper />} />
						<Route path='new/:cat_id' element={<NewEntry categories={categories} addEntry={addEntry} />} />
					</Route>
					<Route path='*' element={<h3>Page Not Found</h3>} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
