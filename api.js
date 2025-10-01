


      const loadPost=()=>{
        const url ='https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(response=> response.json())
        .then(json=> displayPost(json))
      }
   const displayPost=(posts)=>{
    // 1.Get The container
    posts.forEach(posts=>{
      const postContainer = document.getElementById('post-container');
      const div = document.createElement('div');
      // console.log(div)

      div.appendChild(postContainer);

    })
   }