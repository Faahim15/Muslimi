 const HandleRegistration = (event) =>
 {  
    event.preventDefault();
    const username = GetValue("username");
    const first_name = GetValue("first_name");
    const last_name = GetValue("last_name");
    const email = GetValue("email");
    const password = GetValue("password");
    const confirm_password = GetValue("confirm_password");

    const info = {
          username,
          first_name,
          last_name,
          email,
          password,
          confirm_password,

    }; 
    if (password === confirm_password) {
        document.getElementById("error").innerText = "";
        if (
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
            password
          )
        ) {
          console.log(info);
    
          fetch("https://zakat-donating-system.onrender.com/donations/register/", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(info),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
          alert('Check your gmail for account activation')
        } else {
          
          alert("pass must contain eight characters, at least one letter, one number and one special character")
        }
      } else {
        
        alert("password and confirm password do not match");
      }

} 

const handleLogin = (event) => {
  event.preventDefault();
  const username = GetValue("login-username");
  const password = GetValue("login-password");
  console.log(username, password);
  if (username &&password) {
    fetch("https://zakat-donating-system.onrender.com/donations/login/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.token && data.user_id) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user_id", data.user_id);
          window.location.href = "index.html";
          alert('Logged In successfully');
        }
        else{
          alert('Invalid user');
        }
      });
  }
};

const GetValue = (id) => 
{
     const value = document.getElementById(id).value;
     return value;
} 


