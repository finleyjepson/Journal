import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function CategorySelection({ categories }) {
    return (
        <>
            <h3>Select a category:</h3>
            <ul> 
                {
                    categories.map((cat, index) => (
                        <li key={index}>
                            <Link to={`/entry/new/${index}`}>{cat.name}</Link>
                        </li>
                    ))
                } 
            </ul>
        </>
    )
}

CategorySelection.propTypes = {
    categories: PropTypes.array
}

export default CategorySelection