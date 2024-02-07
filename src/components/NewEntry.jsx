import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import PropTypes from 'prop-types'

function NewEntry({ categories, addEntry }) {
    const params = useParams()
	const [entry, setEntry] = useState('')
	const nav = useNavigate()

	async function createEntry(e) {
		e.preventDefault()
		// Create the entry
		// 1. Create a new entry object
		const id = await addEntry(params.cat_id, entry)
		// 2. Clear the form
		setEntry('')
		nav(`/entry/${id}`)
	}

    return (
		<>
			<div>
				<h3>New entry in category {categories[params.cat_id]?.name}</h3>
			</div>
			<form action="" className="section" onSubmit={createEntry}>
				<div className="field">
					<label className="label">Content</label>
					<div className="control">
						<textarea className="textarea" value={entry} onChange={e => setEntry(e.target.value)} placeholder="Type your entry journal here"></textarea>
					</div>
				</div>
				<div className="field is-grouped">
					<div className="control">
						<button className="button is-link">Create Entry</button>
					</div>
				</div>
			</form>
		</>
    )
}

NewEntry.propTypes = {
	categories: PropTypes.array,
	addEntry: PropTypes.func
}

export default NewEntry