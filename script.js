console.log("github user finder");

let search_btn = document.getElementById("search_btn");
search_btn.addEventListener("click",finder);

function finder(){
    let user_name = document.getElementById("user_name").value;
    let url = "https://api.github.com/users/" + user_name;
    console.log(url);
    fetch(url).then(function(response){
        return response.json();
    }).then(function(data){
        let user_avatar = data.avatar_url;
        let user = data.html_url;
        document.getElementById("username").innerHTML = "User Found : Click on Image to see Github"
        document.getElementById("user_image").src = user_avatar;
        document.getElementById("link").href = user;
    })
}


