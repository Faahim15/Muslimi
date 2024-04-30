const Donations = () =>{
       
    fetch('https://zakat-donating-system.onrender.com/blog/projects/') 
    .then(res => res.json()) 
    .then(data => data.forEach(pjct => 
    { 
        const getDiv = document.getElementById('cards');
        const div = document.createElement('div');
        div.classList.add('card');
        console.log(pjct.img);
        div.innerHTML = `
        <a>
                    <img class="rounded-t-lg w-full" src="${pjct.img}" alt="no img" />
                </a>
                <div class="p-5">
                    <a >
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${pjct.title}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${pjct.description.slice(0, 100)}</p> 
                    <span class="text-teal-600 text-semibold">Progress: ${(pjct?.progress && pjct?.goal) ? ((pjct.progress >= pjct.goal ? 100 : (pjct.progress * 100 / pjct.goal)).toFixed(0)) : '0'}%</span><br>

                    

                    <a href="donate.html?zakatId=${pjct.id}"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">
                        Donate
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
        ` 
        getDiv.appendChild(div);
    
    
    }));

} 

const GetParam = (event) =>{
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const param = new URLSearchParams(window.location.search).get('zakatId');
    fetch(`https://zakat-donating-system.onrender.com/blog/project/${param}/donate/`,{
        method: 'POST',
        headers:{ "content-type": "application/json" }, 
        body: JSON.stringify({
            amount
        })
    }) 
    .then(res => res.json()) 
    .then(data => {
        if (amount <= 0) {
            alert('Enter a valid amount');
        } 
        else{
            alert('Donation successful');
            window.location.href = 'index.html';
            
            
        }
    })
}


Donations();