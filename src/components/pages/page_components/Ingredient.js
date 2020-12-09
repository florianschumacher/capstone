import PropTypes from 'prop-types'

const Ingredient = ({ title, isDone }) => {
    return (
        <ul>
            <input type="checkbox" checked={isDone} />
            {title}
        </ul>
    )
}

Ingredient.propTypes = {
    title: PropTypes.string.isRequired,
    isDone: PropTypes.bool
}

export default Ingredient