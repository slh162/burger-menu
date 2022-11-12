 const validSignin = () => {
    // checks if email and password are valid
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
    
        if (email.indexOf("@yahoo") == -1 && email.indexOf("@gmail") == -1) {
            alert('wrong email')
            return false;
        }
        if (password.length < 3) {
            alert('wrong password')
            return false;
        }
       

    // asks sign in for password and email from the date base
        fetch('/signin', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({
                email: email,
                password: password
            })
    // sends date to the menu to display the users name
        }).then((res) => { return res.json() }).then((data) => {
            let userName = data.firstName;
            localStorage.setItem('nameOfUser', userName)
            location.href = '/menu';
        })
    

    };
// checkbox shows password
    function myFunction() {
        var x = document.getElementById("password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }}