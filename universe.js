const dataFetch = ()=>{
     const url = `https://openapi.programming-hero.com/api/ai/tools`;
     fetch(url)
     .then(res=>res.json())
     .then(data=>showData(data.data.tools

        ))
        
}


const showData = (data) =>{
    // console.log(data)
     const cardContainer = document.getElementById('card-container');
      const remaining = data.slice(6,12);
    
     loading(true);
     
      const showAll = document.getElementById('show-all');
      if( data.length>6){
         data = data.slice(0,6);
            showAll.classList.remove('d-none');
             if(data.slice(0,6)){
              document.getElementById('btn-show-all').addEventListener('click',function(){
                
                  showData(remaining);
                 
              })
             }
            
         
      }
    
    
      else{
         showAll.classList.add('d-none');
      }

     
     
    
     data.forEach(element => {
       // console.log(element)
        
        const div = document.createElement('div');
       
        div.classList.add('col');
       
      
        div.innerHTML = `
        <div class="col">
        <div class="card h-100">
          <img src=${element.image} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"> 
             <div>
            
             <h4>Features</h4>
             <ol>
             <li>${element.features[0]}</li>
             <li>${element.features[1]}</li>
             <li>${element.features[2]}</li>
           </ol>
            </div>
            
            </h5>
           
          </div>
         
          <div class="card-footer d-flex justify-content-between">
           <div>
            <h4>${element.name}</h4>
            
            <p><i class="fa-regular fa-calendar-days"></i> ${element.published_in}</p>
            </div>
            
             <div class="d-flex align-items-center"><i class="fa-thin fa-arrow-right" onclick="modalDemo('${element.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal">></i></div>
          </div>
        </div>
      </div>
        
        `;
        cardContainer.appendChild(div);
       
     });
     
    
     loading(false);
     

}


const loading = load =>{
   const loader = document.getElementById('loader');
   if(loading){
      loader.classList.remove('d-none');
   }
   else{
      loader.classList.add('d-none');
   }

}


dataFetch();
 
  

const modalDemo=(data)=>{
    const url =`https://openapi.programming-hero.com/api/ai/tool/${data}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>showModel(data.data))
   
     
}
const  showModel =(data)=>{
    console.log(data)
     const modal = document.getElementById('modal-id');
     const div = document.createElement('div');
     modal.innerHTML=" ";
     div.innerHTML =`

     <div class="row row-cols-1 row-cols-md-2 g-4">
     <div class="col">
     <div class="card">
      
       <div class="card-body">
        
         <p class="card-text">${data.description}</p>
          <div class="">
          <button type="button" class="btn  btn-outline-primary disabled mb-2">${data.pricing[0].price ? data.pricing[0].price:'Free of cost' } <br> ${data.pricing[0].plan}</button>
          <button type="button" class="btn btn-outline-success mb-2 disabled">${data.pricing[1].price?data.pricing[1].price:'Free of cost'} <br> ${data.pricing[1].plan}</button>
          <button type="button" class="btn btn-outline-danger disabled">${data.pricing[2].price ? data.pricing[2].price: 'Free of cost'
          } <br> ${data.pricing[2].plan}</button>
           </div>

           <div>
               <h4>Features</h4>
               <ul>
               <li>${data.features[1].feature_name}</li>
               <li>${data.features[2].feature_name}</li>
               <li>${data.features[3].feature_name}</li>
             </ul>

           </div>
           <div>
               <h4>Integrations</h4>
               <ul>
               <li>${data.integrations[0]}</li>
               <li>${data.integrations[1]}</li>
               <li>${data.integrations[2]}</li>
             </ul>

           </div>
        
       </div>
     </div>
   </div> 
   <div class="col">
     <div class="card">
        <div class="position-relative">
         <button type="button" class="btn btn-danger p-2 position-absolute top-0 end-0">${data.accuracy.score *100  ? data.accuracy.score *100+'% accuracy': 'not accuracy' }</button>
       </div>
    
     <img src=${data.image_link[0]} class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${data.input_output_examples[0].input}</h5>
         <p class="card-text">${data.input_output_examples[0].output}</p>
       </div>
     </div>
   </div>           
                    
      </div>
     
     `;
     modal.appendChild(div);
}


