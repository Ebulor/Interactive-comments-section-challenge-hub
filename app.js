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
    const otherUsers = document.createElement("div");
    const comment = document.createElement("textarea");
    const profile = document.createElement("div");
    const profileImg = document.createElement("img");
    const sendBtn = document.createElement("button");
    const holder = document.createElement("div");
    const otherComments = document.createElement("div");
    const otherProfile = document.createElement("img");

    //other otherUsers

    //append
    container.appendChild(currentUser);
    container.appendChild(otherUsers);
    currentUser.appendChild(holder);
    holder.appendChild(profile);
    holder.appendChild(comment);
    profile.appendChild(profileImg);
    currentUser.appendChild(sendBtn);
    otherUsers.appendChild(otherComments);
    otherComments.appendChild(otherProfile);

    //set
    profileImg.src = data[i].currentUser.image;

    console.log(data[i].comments);
    sendBtn.innerHTML = "send";
    comment.placeholder = "Add a comment...";

    //adding classname
    currentUser.classList.add("current-user");
    otherUsers.classList.add("other-users");
    sendBtn.classList.add("send-btn");
    holder.classList.add("holder");
    comment.classList.add("input");
    profile.classList.add("profile");
    otherUsers.classList.add("other-users");
    otherComments.classList.add("other-comments");

    for (let j = 0; j < data[i].comments.length; j++) {
      otherProfile.src = data[j].comments.image;
      console.log(data[j]);
    }
  }
}
