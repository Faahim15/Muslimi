const Blog = () =>{
     fetch('https://zakat-donating-system.onrender.com/blog/post/')
     .then(res => res.json()) 
     .then( data => data.forEach(ele =>{
          const card = document.getElementById('blog'); 
          const div = document.createElement('div');
          div.innerHTML = `
          <div
                class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-300">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${ele.title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${ele.content.slice(0,150)}.....</p>
                <a href="blog.html?PostId=${ele.id}" rel="noopener noreferrer"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
          ` 
          card.appendChild(div)

     }))
}  
 
const ReadMore = () =>{
    
    const param = new URLSearchParams(window.location.search).get('PostId')
      fetch(`https://zakat-donating-system.onrender.com/blog/post/${param}/`)
      .then (res => res.json()) 
      .then (blog => {
        const Blogs = document.getElementById('read_blog');
        const div = document.createElement('div');
        div.innerHTML = `
        <div
        class="w-full mt-4 m-10 p-10 h-auto text-center ml-auto mr-auto  shadow hover:bg-gray-300 shadow- font-sans rounded-md bg-white text-black">
        <b class='text-3xl text-serif'>${blog.title}</b> <br>
        <small class='font-serif text-left'>${blog.created_at}</small>
        <p class="pr-auto pl-auto text-justify p-2">
            ${blog.content}
        </p> 
        
    </div>
        
        
        `
        
        Blogs.appendChild(div);
      })
}
ReadMore();
Blog();