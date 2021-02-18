const weeklyElement = document.getElementById('weekly-planner');
const generalElement = document.getElementById('general-planner');

function getWeekly(id) {
    var data = new XMLHttpRequest();
    var params = `id=${id}`;
	data.onload = function() {
		if(data.status == 200 && data.readyState == 4){    
            var lines = data.responseText.split('$');
            lines.forEach(function(line) {
                if (line !== "") {
                    let elements = line.split(';');
                    let date = new Date(elements[0]);
                    let messageElement = document.createElement('p');
                    messageElement.innerHTML = `${date.toDateString()}: ${elements[1]}`;
                    weeklyElement.appendChild(messageElement);
                }
            });
        }
	};
	data.open("POST", "get-weekly.php", true);
	data.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	data.send(params);
}

function getGeneral(id) {
    var data = new XMLHttpRequest();
    var params = `id=${id}`;
	data.onload = function() {
		if(data.status == 200 && data.readyState == 4){    
            var lines = data.responseText.split('$');
            lines.forEach(function(line) {
                if (line !== "") {
                    let elements = line.split(';');
                    let date = new Date(elements[0]);
                    let messageElement = document.createElement('p');
                    messageElement.innerHTML = `${date.toDateString()}: ${elements[1]}`;
                    generalElement.appendChild(messageElement);
                }
            });
        }
	};
	data.open("POST", "get-general.php", true);
	data.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	data.send(params);
}