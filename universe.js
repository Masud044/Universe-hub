const dataFetch = ()=>{
     const url = `https://openapi.programming-hero.com/api/ai/tools`;
     fetch(url)
     .then(res=>res.json())
     .then(data=>showData(data.data.tools

        ))
        
}
 
const showData = (data) =>{

      

   
     const cardContainer = document.getElementById('card-container');
   
      const remaining = data.slice(6,12);
      
      loading(true);
    
    
     
      const showAll = document.getElementById('show-all');
         
     if(data[0].id !== '04'){
      if( data.length>6){
         
      data = data.slice(0,6);
         
         showAll.classList.remove('d-none');
         
          if(data.slice(0,6)){
          
           document.getElementById('btn-show-all').addEventListener('click',function(){
            
               showData(remaining);
            
             
               loading(false);   
              
           })
           
          }
            
      
   }
   else{
    showAll.classList.add('d-none');
 }
  }
      
    
    
     
      
     
     data.forEach(element => {

     
    
      
      
       
        const div = document.createElement('div');
       
        div.classList.add('col');
       
      
        div.innerHTML = `
        <div class="col">
        <div class="card h-100">
          <img  src=${element.image} class="card-img-top" alt="...">
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
    
     
     

}



const modalDemo=(data)=>{
    const url =`https://openapi.programming-hero.com/api/ai/tool/${data}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>showModel(data.data))
   
     
}
const  showModel =(data)=>{
   
   let integration = data.integrations;
   if(integration === null){
    integration = [];
   }
   let price = data.pricing;
 
   if(price == null){
       price = 'not found';
   }
   let input = data.input_output_examples;
    if(input==null){
       input = 'not found';
    }
   
  
  
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
          <button type="button" class="btn btn-outline-primary disabled mb-2">${price ? price[0].price:'Free of cost' } <br> ${price ? price[0].plan:'not found' }</button>
          <button type="button" class="btn btn-outline-success mb-2 disabled">${price ? price[1].price:'Free of cost'} <br> ${price ? price[1].plan :'not null'}</button>
          <button type="button" class="btn btn-outline-danger disabled">${price ? price[2].price:'Free of cost'} <br> ${price ? price[2].plan :'not null'}</button>
           </div>

           <div>
               <h4>Features</h4>
               <ul>
               <li>${data.features[1].feature_name === undefined ? 'not found':data.features[1].feature_name}</li>
               <li>${data.features[2].feature_name === undefined ? 'not found':data.features[2].feature_name}</li>
               <li>${data.features[3].feature_name === undefined ? 'not found':data.features[3].feature_name}</li>
             </ul>

           </div>
           <div>
               <h4>Integrations</h4>
               <ul>
               <li>${integration[0] ? integration[0] : 'not found'}</li>
               <li>${integration[1] ? integration[1] : 'not found'}</li>
               <li>${integration[2] ? integration[2] : 'not found'}</li>
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
         <h5 class="card-title">${input ? input[0].input :'not found'}</h5>
         <p class="card-text">${input ? input[0].output :'not found'}</p>
       </div>
     </div>
   </div>           
                    
      </div>
     
     `;
     modal.appendChild(div);
}
  const loading = load =>{
  
  const loader = document.getElementById('loader');
  if(load){
     loader.classList.remove('d-none');
  }
  else{
     loader.classList.add('d-none');
  }

}

  const sortingFetch=()=>{
   
       const url = `https://openapi.programming-hero.com/api/ai/tools`;
       fetch(url)
      .then(res=>res.json())
      .then(data=>sortingData(data.data.tools
 
         ))
         
 
  }
  const sortingData =(data)=>{
     

       data.sort(function(a,b){
          return new Date(a.published_in) - new Date(b.published_in);
      });
   
     const cardContainer = document.getElementById('card-container');
     cardContainer.innerHTML = '';
     const showAll = document.getElementById('show-all');
     showAll.classList.add('d-none');
    
      showData(data);
      document.getElementById('loader').classList.add('d-none');
  }


