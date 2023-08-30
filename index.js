// Add your code here
function submitData(userName, mail){

    const data = {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email: mail,
        }),
    }
    
    return fetch("http://localhost:3000/users", data)
    .then(function (response) {
        return response.json();
      })
      .then(function (object) {
    const newId = object.id;
    const element = document.createElement('p')
    element.textContent = `New ID: ${newId}`
    document.body.appendChild(element)
      })
      
      .catch(function (error) {
        alert("Unauthorized Access");
        
        document.body.append(error.message);

      });
}
submitData();
