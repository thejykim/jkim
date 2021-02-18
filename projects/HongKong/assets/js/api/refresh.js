const main = document.getElementById('main')
const info = document.getElementById('info')
const refresh = document.getElementById('refresh')
const refreshTimer = document.getElementById('refreshTimer')
const articleDiv = document.getElementById('articles')

// News APIs
const urlGuardian = 'https://content.guardianapis.com/search?show-blocks=all&order-by=newest&q=hong%20kong&api-key=1e075072-b9c5-41d7-9849-ad82dca2efeb'
const urlNYT = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=hong%20kong&sort=newest&api-key=bWQe3J5aaUFHa0XN3JD0WK3FKj943U46'

let isAuto = false

var timer = 15

// News array

var newsArray = ["hello"]

function setRefresh() {
	if(refresh.checked) {
		isAuto = true
		info.innerHTML = '<div class="alert alert-success" role="alert" id="refreshConfirm">\n<div class="container">\nAuto refresh enabled!\n<button type="button" class="close" data-dismiss="alert" aria-label="Close">\n<span aria-hidden="true">\n<i class="now-ui-icons ui-1_simple-remove"></i>\n</span>\n</button>\n</div>\n</div>'
		refreshStart()
	} else {
		isAuto = false
		info.innerHTML = '<div class="alert alert-warning" role="alert" id="refreshConfirm">\n<div class="container">\nAuto refresh disabled!\n<button type="button" class="close" data-dismiss="alert" aria-label="Close">\n<span aria-hidden="true">\n<i class="now-ui-icons ui-1_simple-remove"></i>\n</span>\n</button>\n</div>\n</div>'
		refreshTimer.innerHTML = ""
		timer = 15
	}
}

function refreshStart() {
	if (isAuto) {
		if (timer > 0) {
			refreshTimer.innerHTML = 'Refreshing in <span class="badge badge-primary">' + timer + '</span> seconds.'
			timer--
			setTimeout(refreshStart, 1000);
		} else {
			timer = 15
			getNews()
			refreshStart()
		}
	} else {
		return
	}
}

function clearInfo() {
	info.innerHTML = ""
}

async function callGuardian() {
	let response = await fetch(urlGuardian)
	let json = await response.json()
	let articles = json.response.results
	articles.forEach(article => {
		// parse date into date object
		let yearInt = parseInt(article.webPublicationDate.substring(0, 4), 10)
		let monthInt = parseInt(article.webPublicationDate.substring(5, 7), 10)
		let dayInt = parseInt(article.webPublicationDate.substring(8, 10), 10)
		let hourInt = parseInt(article.webPublicationDate.substring(11, 13), 10)
		let minuteInt = parseInt(article.webPublicationDate.substring(14, 16), 10)
		let millInt = parseInt(article.webPublicationDate.substring(17, 19), 10)
		let dateObj = new Date(yearInt, monthInt, dayInt, hourInt, minuteInt, millInt)
		let articleObject = {
			header: emphasizeString(article.webTitle, "Hong Kong"),
			date: dateObj,
			description: emphasizeString(article.blocks.body[0].bodyTextSummary.substring(0, 400), "Hong Kong"),
			webURL: article.webUrl,
			source: '<span class="badge badge-warning">The Guardian</span>'
		}
		newsArray.push(articleObject)
	})
		
}

async function callNYT() {
	let response = await fetch(urlNYT)
	let json = await response.json()
	let articles = json.response.docs
	articles.forEach(article => {
		let yearInt = parseInt(article.pub_date.substring(0, 4), 10)
		let monthInt = parseInt(article.pub_date.substring(5, 7), 10)
		let dayInt = parseInt(article.pub_date.substring(8, 10), 10)
		let hourInt = parseInt(article.pub_date.substring(11, 13), 10)
		let minuteInt = parseInt(article.pub_date.substring(14, 16), 10)
		let millInt = parseInt(article.pub_date.substring(17, 19), 10)
		let dateObj = new Date(yearInt, monthInt, dayInt, hourInt, minuteInt, millInt)
		let articleObject = {
			header: emphasizeString(article.headline.main, "Hong Kong"),
			date: dateObj,
			description: emphasizeString(article.lead_paragraph.substring(0, 400), "Hong Kong"),
			webURL: article.web_url,
			source: '<span class="badge badge-default">The NY Times</span>'
		}
		newsArray.push(articleObject)
	})
}

function compare( a, b ) {
	return b.date.valueOf() - a.date.valueOf();
}


function emphasizeString(str, find){
    var re = new RegExp(find, 'g');
    return str.replace(re, '<mark>'+find+'</mark>');
}

async function getNews() {
	// reset articleDiv and put a loading icon
	articleDiv.innerHTML = "<p>Loading...</p>"
	// reset news array
	clearNews()
	
	// call the news APIs
	await callGuardian()
	await callNYT()

	// sort array (tbd)
	newsArray.sort(compare)

	// get rid of the loading text
	articleDiv.innerHTML = ""

	console.log(newsArray.length)
	// push articleObjects into DOM
	newsArray.forEach(articleObject => {
		let card = document.createElement('div')
		card.setAttribute('class', 'card')
		card.setAttribute('style', 'border: 1px solid black')

		let cardDiv = document.createElement('div')
		cardDiv.setAttribute('class', 'card-body')

		let header = document.createElement('h3')
		header.setAttribute('class', 'card-title')
		header.innerHTML = '<strong>' + articleObject.header + '</strong>'

		let date = document.createElement('p')
		date.setAttribute('class', 'card-subtitle')
		date.textContent = articleObject.date.toString()

		let source = document.createElement('div')
		date.setAttribute('class', 'card-title')
		source.innerHTML = articleObject.source

		let divider = document.createElement('hr')

		let summary = document.createElement('p')
		summary.setAttribute('class', 'card-body')
		summary.innerHTML = "<b>" + articleObject.description + '...</b>'

		let linkTo = document.createElement('button')
		linkTo.setAttribute('class', 'btn btn-primary btn-round card-body')
		linkTo.setAttribute('type', 'button')
		linkTo.setAttribute('onclick', "window.open('" + articleObject.webURL + "'), '_blank'")
		linkTo.innerHTML = 'Link to article'

		cardDiv.append(header)
		cardDiv.append(date)
		cardDiv.append(source)
		cardDiv.append(divider)
		cardDiv.append(summary)
		cardDiv.append(linkTo)

		card.append(cardDiv)

		articleDiv.append(card)
	})
}

function clearNews() {
	newsArray.length = 0
}

window.onload = getNews