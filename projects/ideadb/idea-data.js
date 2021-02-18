const recentDiv = document.getElementById('recent-ideas');

function getRecent() {
    var data = new XMLHttpRequest();
    
    data.onload = function() {
        if (data.status == 200 && data.readyState == 4) {
            var ideas = data.responseText.split('|');
            ideas.reverse();
            ideas.forEach(function(idea) {
                if (idea !== "") {
                    let elements = idea.split('~');
                    let id = elements[0];
                    let user = elements[1];
                    let title = elements[2];
                    let content = elements[3];
                    
                    // start inserting into the page
                    let column = document.createElement('div');
                    column.setAttribute('class', 'column is-one-third');
                    
                    let cardDiv = document.createElement('div');
                    cardDiv.setAttribute('class', 'card');
                    cardDiv.setAttribute('style', 'border: 1px solid lightgray')
                    
                    let cardContent = document.createElement('div');
                    cardContent.setAttribute('class', 'card-content');
                    
                    let cardContent2 = document.createElement('div');
                    cardContent2.setAttribute('class', 'content');
                    
                    let cardUser = document.createElement('p');
                    cardUser.setAttribute('class', 'subtitle is-6 quicksand');
                    cardUser.setAttribute('data-tooltip', `${elements[1]}`);
                    let shortUser = user.substring(0, 5);
                    cardUser.innerText = shortUser + "...";
                    
                    let cardTitle = document.createElement('h5');
                    cardTitle.setAttribute('class', 'title is-5 josefin-sans');
                    cardTitle.innerText = title;
                    
                    cardContent2.appendChild(cardUser);
                    cardContent2.appendChild(cardTitle);
                    cardContent.appendChild(cardContent2);
                    cardDiv.appendChild(cardContent);
                    column.appendChild(cardDiv);
                    
                    recentDiv.appendChild(column);
                }
            })
        }
    }
    
    data.open("POST", "get-ideas.php", true);
    data.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    data.send();
}