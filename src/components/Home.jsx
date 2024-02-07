import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Home({ entries=[] }) {
    return (
		<>
			<h3>Journal Entries</h3>
			<ul>
				{entries.map((entry, index) => (
					<li key={index}>
						<Link to={`/entry/${index}`}>{entry.content}</Link>
					</li>
				))}
			</ul>
		</>
    )
}

Home.propTypes = {
	entries: PropTypes.array
}

export default Home