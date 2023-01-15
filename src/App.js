import logo from './logo.svg';
import './App.css';
import { Navbar } from './container'
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const OpenAI = require('openai');
  const { Configuration, OpenAIApi } = OpenAI;
  const [message, setMessage] = useState('')
  const [tag, setTag] = useState('Hit GO! to see the magic')


  async function makeTag() {
    axios.get('https://taser-backend-api.cyclic.app/respond', {
      params: {
        product: message
      }
    })
    .then(function (response) {
      console.log(response.data);
      setTag(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  function getData(val) {
    console.warn(val.target.value)
    setMessage(val.target.value)
  }

  function wte() {
    alert('For the best results. Explain about your company/Product. Like for us it would be `a website that makes taglines for other companies`. Like wise Explain about your Company/Product')
  }

  return (
    <div className='App'>
      <Navbar />
      {/* Content */}
      <div className='container'>
        <center>
          <div className='formDiv'>
            <input className='textInput' onChange={getData} type="text" placeholder='Explain about your Company/Product' />
            <button className='send' onClick={makeTag}>GO!</button>
          </div>
          <p onClick={wte}>What to enter for best results?</p>
          <h1>{tag}</h1>
        </center>
      </div>
      {/* Content */}
    </div>
  );
}

export default App;
