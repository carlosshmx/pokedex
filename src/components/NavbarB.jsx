import React from 'react'

const NavbarB = ({ handleSubmit }) => {
    const handleChange = (event) => {
        const value = event.target.value.replace(/[0-9]/g, ''); // Remueve números
        event.target.value = value;
    };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" role="textbox" onChange={handleChange} />
      <button type='submit' role='button'>Enviar</button>
    </form>
  )
}
export default NavbarB
