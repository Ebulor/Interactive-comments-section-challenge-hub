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
  const currentUser = document.createElement("div");

  //append
  container.appendChild(currentUser);

  //set
  currentUser.innerHTML = data[0].username;
}
