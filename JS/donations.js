LoadProjects = () =>{
    fetch('https://zakat-donating-system.onrender.com/blog/projects/')
    .then(res => res.json()) 
    .then(data => {
         console.log(data);
    })


} 
LoadProjects();