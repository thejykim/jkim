const numSwipesElement = document.getElementById('numSwipes');
const numPlusSwipesElement = document.getElementById('numPlusSwipes');
const resultsElement = document.getElementById('results');
const extraResultsElement = document.getElementById('extraResults');
const toggleSettingsElement = document.getElementById('toggleSettings');
const advancedSettingsElement = document.getElementById('advancedSettings');
const plusSwipeDivElement = document.getElementById('plusSwipes');
const weekdaysElement = document.getElementById('weekdays');
const detailedStatsElement = document.getElementById('detailedStats');
const plusSwipeToggleElement = document.getElementById('plusSwipesToggle');

var numSwipes;
var numPlusSwipes;
var date;
var endDate;
var daysUntilEnd;
var showSettings = false;

function start() {
	numSwipes = numSwipesElement.value;
	numPlusSwipes = numPlusSwipesElement.value;
	date = new Date();
	calculateEndDate();

	// check numSwipes textbox
	if (isNaN(numSwipes) || isNaN(numPlusSwipes)) {
		resultsElement.innerHTML = `Please input a valid number in the textbox(es)!`;
		extraResultsElement.innerHTML = ``;
		return;
	}

	// calculate number of days until the end of the semester
	daysUntilEnd = Math.floor((endDate.getTime() - date.getTime()) / (1000 * 3600 * 24));

	calculateWeekdays();

	printResults();

	detailedStats();
}

function calculateEndDate() {
	// for now, this tool just sets it to the end of Spring 2020
	endDate = new Date(2020, 4, 5);
}

function toggleSettings() {
	if (showSettings) {
		toggleSettingsElement.innerText = "show advanced settings";
		showSettings = false;
		advancedSettingsElement.style.display = "none";
	} else {
		toggleSettingsElement.innerText = "hide advanced settings";
		showSettings = true;
		advancedSettingsElement.style.display = "";
	}
}

function calculateWeekdays() {
	if (weekdaysElement.checked) {
		// calculate number of weekends
		let weeks = Math.floor(daysUntilEnd / 7);
		daysUntilEnd -= weeks * 2;

		// check edge cases
		let startDay = date.getDay();
		let endDay = date.getDay();

		// account for extra weekend
		if (startDay - endDay > 1) {
			daysUntilEnd -= 2;
		}

		// if start is Sunday and end isn't Saturday, or vice versa
	    if (startDay == 0 && endDay != 6) {
	        daysUntilEnd--;
	    } else if (endDay == 6 && startDay != 0) {
	        daysUntilEnd--; 
	    }
	}
}

function detailedStats() {
	if (detailedStatsElement.checked) {
		if (plusSwipeToggleElement.checked) {
			if (weekdaysElement.checked) {
				extraResultsElement.innerHTML = `With the end of the semester on <b>${endDate.toDateString()}</b>, this leaves <b>${daysUntilEnd}</b> weekdays to use your swipes. You can use <b>${Math.round(((numSwipes - numPlusSwipes)/daysUntilEnd) * 1000) / 1000}</b> swipes and <b>${Math.round((numPlusSwipes/daysUntilEnd) * 1000) / 1000}</b> plus swipes per weekday until then.`;
			} else {
				extraResultsElement.innerHTML = `With the end of the semester on <b>${endDate.toDateString()}</b>, this leaves <b>${daysUntilEnd}</b> days to use your swipes. You can use <b>${Math.round(((numSwipes - numPlusSwipes)/daysUntilEnd) * 1000) / 1000}</b> swipes and <b>${Math.round((numPlusSwipes/daysUntilEnd) * 1000) / 1000}</b> plus swipes per day until then.`;
			}
		} else {
			if (weekdaysElement.checked) {
				extraResultsElement.innerHTML = `With the end of the semester on <b>${endDate.toDateString()}</b>, this leaves <b>${daysUntilEnd}</b> weekdays to use your swipes. You can use <b>${Math.round((numSwipes/daysUntilEnd) * 1000) / 1000}</b> swipes per weekday until then.`;
			} else {
				extraResultsElement.innerHTML = `With the end of the semester on <b>${endDate.toDateString()}</b>, this leaves <b>${daysUntilEnd}</b> days to use your swipes. You can use <b>${Math.round((numSwipes/daysUntilEnd) * 1000) / 1000}</b> swipes per day until then.`;
			}
		}
	} else {
		extraResultsElement.innerHTML = ``;
	}
}

function plusSwipeText() {
	if (plusSwipeToggleElement.checked) {
		plusSwipeDivElement.style.display = "";
	} else {
		plusSwipeDivElement.style.display = "none";
	}
}

function printResults() {
	if (plusSwipeToggleElement.checked) {
		if (weekdaysElement.checked) {
			resultsElement.innerHTML = `You can use <b>${Math.round(((numSwipes - numPlusSwipes)/daysUntilEnd) * 10) / 10}</b> swipes and <b>${Math.round((numPlusSwipes/daysUntilEnd) * 10) / 10}</b> plus swipes per weekday until the end of the semester.`;
		} else {
			resultsElement.innerHTML = `You can use <b>${Math.round(((numSwipes - numPlusSwipes)/daysUntilEnd) * 10) / 10}</b> swipes and <b>${Math.round((numPlusSwipes/daysUntilEnd) * 10) / 10}</b> plus swipes per day until the end of the semester.`;
		}
	} else {
		if (weekdaysElement.checked) {
			resultsElement.innerHTML = `You can use <b>${Math.round((numSwipes/daysUntilEnd) * 10) / 10}</b> swipes per weekday until the end of the semester.`;
		} else {
			resultsElement.innerHTML = `You can use <b>${Math.round((numSwipes/daysUntilEnd) * 10) / 10}</b> swipes per day until the end of the semester.`;
		}
	}
}