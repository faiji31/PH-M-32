


      const loadPost=()=>{
        const url ='https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(response=> response.json())
        .then(json=> displayPost(json))
      }
   const displayPost=(posts)=>{
    // 1.Get The container
    const postContainer = document.getElementById('post-container1');
    postContainer.innerHTML =" ";
    posts.forEach(post=>{
      
      const div1 = document.createElement('div');
      div1.innerHTML=`<div id="post-container1">
    <div class="post-card">
        <h1>This is Post Title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error dolorum mollitia repellat aliquam nemo harum alias id, sit magnam ab iure maxime sed inventore corrupti nulla quia, earum natus.
        </p>

    </div>
</div>



      `;
      // console.log(div)

     
postContainer.append(div1);
    })
   }