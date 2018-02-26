import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "isomorphic-fetch";
import Button from 'react-bootstrap/lib/Button';
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js"></script>

function getTopStories(){
 return window.fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
  .then(response => response.json())
  .then(data => {
    var topTenId = [];
    var topTenUrls = [];
    var base_url = 'https://hacker-news.firebaseio.com/v0/item/';
    for (var i=0; i<10; i++){
         topTenId.push(data[i]);
         var full_url = base_url + topTenId[i].toString() + '.json?print=pretty';
         topTenUrls.push(full_url);
         //document.getElementById("topTen").innerHTML = topTenId;
     }
     return topTenUrls;
  })
  // .then(titles =>{
  //   var topTitles = [];
  //   for(var i=0;i<10;i++){
  //     //console.log(titles[i]);
  //     topTitles.push(titles[i]);
  //   }
  //   return topTitles;
  // })
  .catch(error => {
     console.log('There was an error: ', error);
  });
}

var titles =[];
var score = [];
var authors = [];
var urls = [];

var urlCount = [];

function callFetch(Ids,i){
  window.fetch(Ids)
  .then(response => response.json())
  .then(data => {
    console.log(data.title);
    console.log(data.url);
    titles.push(data.title);
    score.push(data.score);
    authors.push(data.by);
    urls.push(data.url);
    urlCount = "topTenUrls"+i.toString();
    console.log(urlCount);
    //document.write('<a href="' + test + '">Open here</a>');
    document.getElementById(urlCount).innerHTML = titles[i];
    //document.getElementById("topTenTitles1").innerHTML = titles[1];
    document.getElementById("topTenScores").innerHTML = score;
    document.getElementById("topTenAuthors").innerHTML = authors;
    //document.getElementById("topTenUrls").innerHTML = urls;
    document.getElementById(urlCount).href = urls[i];
    //document.getElementById("topTenUrls1").href = urls[0]; 
    //document.getElementById("topTenUrls2").href = urls[1]; 
    //document.getElementById("xxx").href = test;
    return data.title
  })
}

getTopStories(true).then(function (topIds){
  //console.log(topIds);
  //Promise.all([
    for(var i = 0; i < 10; i++){
      callFetch(topIds[i],i);
    }
  });




function ColorBlock() {
  let styles = {
    margin: '20px',
    width: '250px',
    height: '250px',
    backgroundColor: 'yellow',
  };
  return (
    <div>
      <div className="yellow-box" style={styles}>
      </div>
    </div>
  )
}
// Promise.all([
//   window.fetch("https://hacker-news.firebaseio.com/v0/item/16459096.json?print=pretty"),
//   window.fetch("https://hacker-news.firebaseio.com/v0/item/16458970.json?print=pretty"),
//   window.fetch("https://hacker-news.firebaseio.com/v0/item/16459376.json?print=pretty")
// ]).then(response => response.json())
// .then(([data1, data2, data3]) => {
//   console.log(data1.title);
//   console.log(data2.title);
//   console.log(data3.title);
// }).catch((err) => {
//     console.log(err);
// });






class App extends Component {
  render() {
    return (
      <div className="App">
      
        {/*<header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.*/}
        <br/>
          <p>Authors: <span id ="topTenAuthors"></span></p>
          <p>Scores : <span id ="topTenScores"></span></p>
          <a href="" id="topTenUrls0"><span id ="topTenTitles0"></span></a>
          <br/>
          <a href="" id="topTenUrls1"><span id ="topTenTitles1"></span></a>
          <br/>
          <a href="" id="topTenUrls2"><span id ="topTenTitles2"></span></a>
          <br/>
          <a href="" id="topTenUrls3"><span id ="topTenTitles3"></span></a>
          <br/>
          <a href="" id="topTenUrls4"><span id ="topTenTitles4"></span></a>
          <br/>
          <a href="" id="topTenUrls5"><span id ="topTenTitles5"></span></a>
          <br/>
          <a href="" id="topTenUrls6"><span id ="topTenTitles6"></span></a>
          <br/>
          <a href="" id="topTenUrls7"><span id ="topTenTitles7"></span></a>
          <br/>
          <a href="" id="topTenUrls8"><span id ="topTenTitles8"></span></a>
          <br/>
          <a href="" id="topTenUrls9"><span id ="topTenTitles9"></span></a>
      </div>
    );
  }
}

export default App;
