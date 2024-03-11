import react, { useState } from 'react'

export default function Form(props) {

  const [value, setValue] = useState("")

  const onChange = e => {
    const { value } = e.target
    setValue(value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.putTodo(value);
    setValue("");
  }

  return (
    <>
      <form className="todo__form">
        <input value={value} onChange={onChange} placeholder="Add New" className="todo__input" />
        <button onClick={handleSubmit} className="form__btn btn">Add</button>
      </form>
    </>
  );
}