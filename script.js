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

function getMonthByNumber(num) {
    let result = '';
    switch(num) {
      case 0: result = 'January';
              break;
      case 1: result = 'February';
              break;
      case 2: result = 'March';
              break;
      case 3: result = 'April';
              break;
      case 4: result = 'May';
              break;
      case 5: result = 'June';
              break;
      case 6: result = 'July';
              break;
      case 7: result = 'August';
              break;
      case 8: result = 'September';
              break;
      case 9: result = 'October';
              break;
      case 10: result = 'November';
              break;
      case 11: result = 'December';
               break;
    }
    return result;
}

let news_list = document.getElementById('news_list');

fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=zOQjJ9rnQUPkwNa8A5d3bV3ZIPMT1ZDZ')
  .then(function(promise) {  
            return promise.json();
})
 .then(function(data){  
   data.results.splice(0, 3).forEach(item=>{

    console.log(item);

    const createdDate = new Date(item.updated_date);
    const day = createdDate.getUTCDate();
    const month = getMonthByNumber(createdDate.getUTCMonth()); 
    console.log(createdDate);
    console.log(day);

    const imageUrl = (item.multimedia.length > 0) ? item.multimedia[0].url : "";

        news_list.innerHTML += 
     `<div class="news">
        <div class = "info">
          <div class="info-header">
            <img src="./images/Author.png">
            <span class="author-name">Authors name</span>
            <span class="in">in</span>
            <span class="topics-name">Topics Name</span>
            <span class="info-delim">·</span>
            <span class="info-date">${day} ${month}</span>
          </div>
          <div class = "article">
            <header class="article-header">
              <h1>${item.title}</h1>
            </header>
            <article class = "article-text">
               ${item.abstract} 
            </article>
          </div>  
          <div class = "info-footer">
            <div type="button" class="news-category-button">
                <span class = "news-category">${item.section}</span>
            </div> 
            <div class="min-read">12 min read</div>
            <div class="for-you">Selected for you</div>
          </div>
        </div>
        <div class="image">
          <img src="${imageUrl}">
        </div>

      </div>`;
   });
})
.catch(e=>console.log(e));


window.addEventListener("load", (event) => {
    console.log("page is fully loaded");

  });