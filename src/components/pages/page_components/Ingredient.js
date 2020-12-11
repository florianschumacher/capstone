import PropTypes from 'prop-types'
import styled from 'styled-components'

const Ingredient = ({ title, isDone, theme }) => {
    return (
        <CheckBoxWrapper >
            <input type="checkbox" checked={isDone} id="ingredient" />
            <label htmlFor="ingredient">
                {title}
            </label>
        </CheckBoxWrapper>
    )
}

Ingredient.propTypes = {
    title: PropTypes.string.isRequired,
    isDone: PropTypes.bool
}

const CheckBoxWrapper = styled.li`
align-items: flex-start;
    display: flex;
    margin-bottom: 0.75rem;
input {
    margin-right: 1rem;
    transform: scale(2);
}
label {
    display: inline-block;
    width: 85%;
}
`
export default Ingredient