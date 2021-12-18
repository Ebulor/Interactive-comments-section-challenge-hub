fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    createComments(data);
  })
  .catch(function (err) {
    console.log(err);
  });

function createComments(data) {
  const container = document.querySelector(".container");
  const users = document.createElement("div");

  for (let i = 0; i < data.length; i++) {
    //append
    container.appendChild(users);

    //set
    users.innerHTML = data[0].username;
  }
}
