const handleSubmit = (event) => {
    event.preventDefault();
}
const data = {
    Username: username,
    Password: password
};

fetch("https://cinema-flix-f0ab625d491b.herokuapp.com/login", {
    method: "POST",
    headers: {},
    body: JSON.stringify(data)
})
    // Transforms response content into a JSON object that the code uses to extract the JWT sent by the myFlixAPI
    .then((response) => response.json())
    .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("token", data.token);
            onLoggedIn(data.user, data.token);
            // Passes user and token back to MainView to be used by all subsequent API requests
            onLoggedIn(data.user, data.token);
        } else {
            alert("No such user");
        }
    })
    .catch((error) => {
        console.error("Error:" , error.message);
        alert(error.message);
    });


