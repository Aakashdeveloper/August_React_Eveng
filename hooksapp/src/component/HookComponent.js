import React,{useState,useEffect} from 'react';
import DisplayComponent from './DisplayComponent';

const url=" http://localhost:8900/news"

function HooksComponent(){
    const [title] = useState('NareshIT');
    const [count,abc] = useState(0);
    const [count1,setCount] = useState(0);
    const[news,setNews] = useState()
    console.log("Before Render")

    useEffect(()=>{
        console.log("useEffect")
        fetch(url)
        .then((res) => res.json())
        .then((data) => {setNews(data)})
    },[])

    return(
        <React.Fragment>
            <h1>Hooks</h1>
            <h2>{title}</h2>
            <h2>{count}</h2>
            <button onClick={() => {abc(count+1)}}>
                Counter
            </button>
            <h2>{count1}</h2>
            <button onClick={() => {setCount(count1+1)}}>
                Counter
            </button>
            <DisplayComponent mydata={news}/>
        </React.Fragment>


    )
}

export default HooksComponent;