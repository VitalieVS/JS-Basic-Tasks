const validCredentials = {
    'username': 'admin',
    'password': '1234'
};

const credentials = {
    'username': prompt("Username = ?"),
    'password': prompt("password = ?")
};

const checkCredentials = () => {
    const validUsername =
        validCredentials.username === credentials.username;

    const validPassword =
        validCredentials.password === credentials.password;

    const isEmpty =
        !credentials.username && !credentials.username;


    if (validUsername && validPassword) {
        console.log("Hello");
    }

    if (isEmpty) {
        console.log("Empty");
    } else {
        !validUsername ? console.log("Wrong username") : false;
        !validPassword ? console.log("Wrong password") : false;
    }
};

checkCredentials();