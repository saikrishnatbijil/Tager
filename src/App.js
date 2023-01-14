import logo from './logo.svg';
import './App.css';
import { Navbar } from './container'
import { useEffect, useState } from 'react';

function App() {
  const OpenAI = require('openai');
  const { Configuration, OpenAIApi} = OpenAI;
  const [message, setMessage] = useState('')
  const [tag, setTag] = useState('Hit GO! to see the magic')
  const configuration = new Configuration({
    apiKey: "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"
  });
  const openai = new OpenAIApi(configuration);

  async function makeTag() {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: 'Write a Tagline for a '+message,
      max_tokens: 20,
      temperature: 0,
    });
    console.warn(response.data.choices[0].text)
    setTag(response.data.choices[0].text)
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
