import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function ShowEntry({ entry, setEntries }) {
    const nav = useNavigate()
    async function deleteEntry() {
        const res = await fetch(`http://localhost:4000/entries/${entry._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        console.log('deleted', data)
        setEntries(entries => entries.filter(e => e._id !== entry._id))
        nav('/')
    }

    return entry ? (
        <>
            <h3>{entry.content}</h3>
            <p>Posted in {entry.category?.name}</p>
            <button onClick={deleteEntry}>Delete</button>
        </>
    ) : (
        <h3>No entry found</h3>
    )
}

ShowEntry.propTypes = {
    entry: PropTypes.object,
    setEntries: PropTypes.func
}

export default ShowEntry