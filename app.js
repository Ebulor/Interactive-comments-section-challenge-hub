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

  for (let i = 0; i < data.length; i++) {
    const currentUser = document.createElement("div");
    const users = document.createElement("div");
    const comment = document.createElement("textarea");
    const profile = document.createElement("div");
    const profileImg = document.createElement("img");
    const sendBtn = document.createElement("button");
    const holder = document.createElement("div");

    //other users
    for (let j = 0; j < data[i].comments.length; j++) {
      console.log(data[j]);
    }

    //append
    container.appendChild(currentUser);
    container.appendChild(users);
    currentUser.appendChild(holder);
    holder.appendChild(profile);
    holder.appendChild(comment);
    profile.appendChild(profileImg);
    currentUser.appendChild(sendBtn);

    //set
    profileImg.src = data[i].currentUser.image;
    sendBtn.innerHTML = "send";
    comment.placeholder = "Add a comment...";

    //adding classname
    currentUser.classList.add("current-user");
    users.classList.add("users");
    sendBtn.classList.add("send-btn");
    holder.classList.add("holder");
    comment.classList.add("input");
    profile.classList.add("profile");
  }
}
