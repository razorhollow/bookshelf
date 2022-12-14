import '@reach/dialog/styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Dialog } from '@reach/dialog'

import {Logo} from './components/logo'

// 🐨 you'll also need to import the Logo component from './components/logo'

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked

// 🐨 use createRoot to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')

function LoginForm({onSubmit, buttonText}) {
  function handleSubmit(event){
    event.preventDefault()
    const {username, password} = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input id='password' type='text' />
      </div>
      <div>
        <button type='submit'>{buttonText}</button>
      </div>
    </form>
  )
}

const App = () => {
  const [openModal, setOpenModal] = React.useState('none')
  const login = (formData) => {
    console.log('login', formData)
  }
  const register = (formData) => {
    console.log('register', formData)
  }
  return(
    <div>
      <Logo width='80' height='80'/>
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
        </div>
      <Dialog aria-label='Login form' isOpen={openModal === 'login'}>
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
        </div> 
        <h3>Login</h3>
        <LoginForm onSubmit={login} buttonText='Login' />
      </Dialog>
      <Dialog aria-label='Registration form' isOpen={openModal === 'register'}>
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
        </div> 
        <h3>Register</h3>
        <LoginForm onSubmit={register} buttonText='Register' />
      </Dialog>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))