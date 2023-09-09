let card = document.querySelector('.card-container');

const postMethod = (articlesArray) => {

    articlesArray.map( (item) => {
        const postElement = document.createElement('div');
        postElement.classList.add('card');
        postElement.innerHTML = ` <div class="card-img">
        <img src="${item.img}" alt="Felix Brych">
    </div>
    <div class="card-data">
        <span>${item.date}</span>
        <h2>${item.title}</h2>
    <p>${item.meta}</p>
    </div>
    <a href="${item.href}" class="card-link"></a> `;
    
        card.append(postElement);
    })
}

fetch('articles.json')
  .then(response => response.json())
  .then(data => {
    postMethod(data);
  })


