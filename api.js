


      const loadPost=()=>{
        const url ='https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(response=> response.json())
        .then(json=> displayPost(json))
      }
   const displayPost=(posts)=>{
    // 1.Get The container
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML =" ";
    posts.forEach(post=>{
      
      const div1 = document.createElement('div');
      div1.innerHTML=`

 <div class="post-card">
        <h1>${post.title}</h1>
        <p>${post.body}
        </p>

    </div>


      `;
      // console.log(div)

     
postContainer.append(div1);
    })
   }