const calculations = (event) =>{
    event.preventDefault();
    const jewelry_price = parseInt(GetValue('jewelry-price')); 
    const current_money = parseInt(GetValue('current-money')); 
    const receivable_money = parseInt(GetValue('receivable-money'));
    const others = parseInt(GetValue('others')); 
    if (jewelry_price < 679275 && current_money ===0 && receivable_money === 0 && others === 0 ) {
        document.getElementById('message').innerText = 'Your not eligble for paying zakat'
    } 
    else {
        const zakat = jewelry_price + current_money + receivable_money + others; 
        document.getElementById('message').innerText = `You are eligble for paying zakat. Your payable zakat is ${zakat/40}Tk.`;
    }
} 

const GetValue = (id) =>{

    const value = document.getElementById(id).value 
    return value;
}