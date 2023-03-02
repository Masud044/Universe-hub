const dataFetch = ()=>{
     const url = `https://openapi.programming-hero.com/api/ai/tools`;
     fetch(url)
     .then(res=>res.json())
     .then(data=>showData(data.data.tools

        ))
}

const showData = data =>{
    // console.log(data)
     const cardContainer = document.getElementById('card-container');

     data.forEach(element => {
        console.log(element)
        
        const div = document.createElement('div');
       
        div.classList.add('col');
      
        div.innerHTML = `
        <div class="col">
        <div class="card h-100">
          <img src=${element.image} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"> Features
             <div>
               <ol class="list-group list-group-numbered">
               
              </ol>      
            </div>
            
            </h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
        
        `;
        cardContainer.appendChild(div);
     });
    
     

}
