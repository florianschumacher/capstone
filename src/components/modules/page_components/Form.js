import styled from 'styled-components/macro'

export default function Form({ onCreateWeight }) {

    function handleSubmit(event) {
        event.preventDefault()
        const formElement = event.target
        const input = formElement.title
        onCreateWeight(input.value)
        formElement.reset()
        input.focus()
    }

    return <FormStyled onSubmit={handleSubmit}>
        <label>
            Add Weight:
      <input name="title" type="numbers" placeholder="Add Weight here" />
        </label>
        <Button>Add</Button>
    </FormStyled>
}

const FormStyled = styled.form`
  display: grid;
  align-items: center;
  gap: 4px;
  width: 50%;
  margin-bottom: 20px;
  justify-items: stretch;

  input {
    font-size: 1em;
    width: 100%;
    padding: 4px 0;
  }
`

const Button = styled.button`
  padding: 10px 20px;
  background: darkblue;
  color: white;
  font-size: 1.2em;
  border: none;
  border-radius: 2px;
`
