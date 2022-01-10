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
  //const mainContainer = document.querySelector(".container");
  const commentsContainer = document.querySelector(".comment-container");

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].comments.length; j++) {
      //create
      const mainUserComment = document.createElement("div");
      const mainWrapper = document.createElement("div");
      const mainUserContent = document.createElement("div");
      const subWrapper = document.createElement("div");
      const mainCommentProfile = document.createElement("div");
      const profileImg = document.createElement("img");
      const profileName = document.createElement("h3");
      const timePosted = document.createElement("p");
      const btns = document.createElement("div");
      const replyBtn = document.createElement("button");
      const commentText = document.createElement("p");
      const score = document.createElement("div");

      //append
      commentsContainer.appendChild(mainUserComment);
      mainUserComment.appendChild(mainWrapper);
      mainUserComment.appendChild(subWrapper);
      mainWrapper.appendChild(mainUserContent);
      mainWrapper.appendChild(score);
      mainUserContent.appendChild(mainCommentProfile);
      mainCommentProfile.appendChild(profileImg);
      mainCommentProfile.appendChild(profileName);
      mainCommentProfile.appendChild(timePosted);
      mainCommentProfile.appendChild(btns);
      btns.appendChild(replyBtn);
      mainUserContent.appendChild(commentText);

      //class
      mainUserComment.classList.add("main-content");
      mainCommentProfile.classList.add("main-profile");
      mainCommentProfile.classList.add("profile");
      mainUserContent.classList.add("main-comment");
      mainWrapper.classList.add("main-wrapper");
      subWrapper.classList.add("sub-wrapper");
      commentText.classList.add("text");
      score.classList.add("score");
      btns.classList.add("btns");
      replyBtn.classList.add("reply-btn");
      profileImg.classList.add("profile-img");
      //set
      profileImg.src = data[i].comments[j].user.image;
      profileName.innerHTML = data[i].comments[j].user.username;
      timePosted.innerHTML = data[i].comments[j].createdAt;
      commentText.innerHTML = data[i].comments[j].content;
      score.innerHTML = data[i].comments[j].score;
      replyBtn.innerHTML = "Reply";

      const line = document.createElement("div");
      const subComments = document.createElement("div");
      for (let k = 0; k < data[i].comments[j].replies.length; k++) {
        console.log(data[i].comments[j].replies[k]);
        //create
        const subContentWrapper = document.createElement("div");
        const subContent = document.createElement("div");
        const subCommentProfile = document.createElement("div");
        const profileImg = document.createElement("img");
        const profileName = document.createElement("h3");
        const timePosted = document.createElement("p");
        const btns = document.createElement("div");
        const replyBtn = document.createElement("button");
        const commentText = document.createElement("p");
        const score = document.createElement("div");

        //append
        subWrapper.appendChild(subComments);
        subWrapper.appendChild(line);
        subComments.appendChild(subContentWrapper);
        subContentWrapper.appendChild(subContent);
        subContent.appendChild(subCommentProfile);
        subContent.appendChild(commentText);
        subCommentProfile.appendChild(profileImg);
        subCommentProfile.appendChild(profileName);
        subCommentProfile.appendChild(timePosted);
        subCommentProfile.appendChild(btns);
        btns.appendChild(replyBtn);
        subContentWrapper.appendChild(score);

        //class
        subContentWrapper.classList.add("sub-content-wrapper");
        subComments.classList.add("sub-comments");
        subContent.classList.add("sub-content");
        line.classList.add("line");
        subCommentProfile.classList.add("sub-profile");
        subCommentProfile.classList.add("profile");
        commentText.classList.add("text");
        profileImg.classList.add("profile-img");
        btns.classList.add("btns");
        replyBtn.classList.add("reply-btn");
        score.classList.add("score");

        //set
        profileImg.src = data[i].comments[j].replies[k].user.image;
        profileName.innerHTML = data[i].comments[j].replies[k].user.username;
        timePosted.innerHTML = data[i].comments[j].replies[k].createdAt;
        commentText.innerHTML =
          " <span>" +
          "@" +
          data[i].comments[j].replies[k].replyingTo +
          "</span>" +
          data[i].comments[j].replies[k].content;
        score.innerHTML = data[i].comments[j].replies[k].score;
        replyBtn.innerHTML = "Reply";

        if (data[i].comments[j].replies[k].user.username === "juliusomo") {
          btns.removeChild(replyBtn);
          //create
          const editBtn = document.createElement("button");
          const deleteBtn = document.createElement("button");

          //append
          btns.appendChild(deleteBtn);
          btns.appendChild(editBtn);

          //class
          editBtn.classList.add("edit-btn");
          deleteBtn.classList.add("delete-btn");

          //set
          editBtn.innerHTML = "Edit";
          deleteBtn.innerHTML = "Delete";
        }

        const replyComment = document.querySelectorAll(".reply-btn");
        replyComment.forEach((btn) => {
          btn.addEventListener("click", letsSee);
        });
      }

      function letsSee() {
        //create

        const subContentWrapper = document.createElement("div");

        //append
        subComments.appendChild(subContentWrapper);

        //class

        subContentWrapper.classList.add("see");
        console.log(subComments);
      }
    }
    //
  }
}
