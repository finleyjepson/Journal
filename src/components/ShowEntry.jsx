import PropTypes from 'prop-types'

function ShowEntry({ entry }) {
    return entry ? (
        <>
            <h3>{entry.content}</h3>
            <p>Posted in {entry.category?.name}</p>
        </>
    ) : (
        <h3>No entry found</h3>
    )
}

ShowEntry.propTypes = {
    entry: PropTypes.object
}

export default ShowEntry