const loadPost=()=>{
    const url="https://jsonplaceholder.typicode.com/todos";
    fetch(url)
    .then(response=>response.json())
    .then(json=>displayPost(json))

}

const displayPost=(posts)=>{
   const postContainer=  document.getElementById('post-container');
   postContainer.innerHTML=" ";

   posts.forEach=(post=>{
    const div2 = document.createElement('div');
    div2.innerHTML=`
    <div class="post-card">
            <h1>${post.title}</h1>
            <p>${post.comopleted}</p>
        </div>
    
    
    `


   })
postContainer.append(div2);




}

