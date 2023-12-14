import React,{useState,useEffect} from 'react'
import axios from 'axios';

const QuoteBox = () => {
  const [quote,setQuote]=useState({})

  useEffect(() => {
    getNewQuote()
  }, [])

  let color;

    const getNewQuote=()=>{
        axios.get('https://api.quotable.io/random')
        .then((response)=>{
            setQuote(response.data)
            console.log(response.data)
        }).catch((error)=>{
        setQuote({error})
        })
        //color = '#' + Math.round(0xffffff * Math.random()).toString(16);
    }
  return (
    <div className='container'>
      <h4>{quote.content}</h4>
      <p>~{quote.author}</p>
      <button><a href='https://twitter.com' target='blank'>Twitter</a></button>
      <button onClick={getNewQuote}>New Quote</button>
    </div>
  )
}

export default QuoteBox