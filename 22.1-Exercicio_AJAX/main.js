document.addEventListener('DOMContentLoaded', function(){

    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followsElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/Rodholfo-Garo')
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(json){
           nameElement.innerText = json.name;
           usernameElement.innerText =json.login;
           avatarElement.src = json.avatar_url;
           followsElement.innerText = json.following;
           followingElement.innerText = json.followers;
           reposElement.innerText = json.public_repos;
           linkElement.href = json.html_url;
        })

})