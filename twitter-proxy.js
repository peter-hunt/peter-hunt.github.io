var getBtn = document.getElementById("get-button");
var getId = document.getElementById("get-user-id");
var url = new URL(window.location.href);
var userId = url.searchParams.get("userId");

getBtn.addEventListener("click", () => {
  var userId = document.getElementById("get-user-id").value;
  if (userId.match(/^\w+$/)) {
    window.location.replace(`https://peter-hunt.github.io/twitter-proxy?userId=${userId}`);
  } else {
    document.getElementById("alert").innerHTML = "Invalid User ID";
  }
});


document.getElementById("viewer").innerHTML = `
<a class="twitter-timeline" href="https://twitter.com/${userId}" id="link">
  Tweets by ${userId}
</a>`
