


const loadData=()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

      }


      const loadPost=()=>{
        const url ='https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(response=> response.json())
        .then(json=> displayPost(json))
      }
      // 1.get the container

      const postContainer = document.getElementById('post-container')


      const displayPost = (posts)=>{
        posts.forEach((post)=>{
            // console.log(post.id);
            // 2. Create HTML Element
            const li = document.createElement('li');
            li.innerText = post.title

            // 3.add li into container

            postContainer.appendChild(li);

        })
      }