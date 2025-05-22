import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
const NewsApp = () => {
const API_KEY="16acce832f2ed4a8600bdf5f11b98310"
    const [search,setSearch]=useState("India");
    const [news,setNews]=useState(null);
    const fetchNews = async () => {
        const News_URL= await fetch(`https://gnews.io/api/v4/search?q=${search}&lang=en&country=us&max=12&apikey=${API_KEY}`);
        const data=await News_URL.json();
    setNews(data.articles);    
    }
    useEffect(()=>{
        fetchNews();
    },[])
    const handleOnInput=(e)=>{
        e.preventDefault()
        setSearch(e.target.value)
    }
    const userInput=(event)=>{
        setSearch(event.target.value)
    }
  return <div>
    <nav>
        <div>
            <h1>Trendy News</h1>
        </div>
        <ul>
            <a>All News</a>
            <a>Trending</a>
        </ul>
        <div className="searchBar">
            <input type="text" placeholder="Search News" value={search} onChange={handleOnInput} />
  <button onClick={fetchNews}  >Search</button>
        </div>
    </nav>
    <div className="heading">
        <p>Stay Updated with Trendy News</p>
    </div>
        <div className="categoriesBtn">
            <button onClick={userInput} value="sports">Sports</button>
            <button onClick={userInput} value="politics">Politics</button>
            <button onClick={userInput} value="entertainment">Entertainment</button>
            <button onClick={userInput} value="health">Health</button>
            <button onClick={userInput} value="fitness">Fitness</button>
        </div>
        {news?<Card MyNews={news}></Card>:"Loading..."}
    
  </div>;
};
export default NewsApp;
