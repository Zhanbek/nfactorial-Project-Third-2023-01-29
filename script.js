// async function getTopStories() {
/*    
const getTopStories = async () => {
    const response = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=zOQjJ9rnQUPkwNa8A5d3bV3ZIPMT1ZDZ')
    if (!response.ok && response.status==='404'){
          console.log('запрос составлен неправильно!')
    }
    const articles = await response.json();
    console.log(articles)
}
*/

let news_list = document.getElementById('news_list');

fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=zOQjJ9rnQUPkwNa8A5d3bV3ZIPMT1ZDZ')
.then(function(promise){  
   return promise.json();
})
.then(function(data){  
   data.results.splice(0,3).forEach(item=>{

    console.log(item);
    
        news_list.innerHTML += 
     `<div
     <header class="news">
        <h1 class="news">${item.title}</h1>
      </header>
      <article class="news">
        ${item.abstract} 
      </article>`;
   });
})
.catch(e=>console.log(e));


window.addEventListener("load", (event) => {
    console.log("page is fully loaded");

  });