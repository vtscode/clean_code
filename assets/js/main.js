// memakai $ tidak apa2
$darkTheme = false

if(localStorage.getItem('defaultTheme') == 'dark') 
	toggleDarkMode()

function toggleDarkMode () {
	if($darkTheme == false) {
		updateView("rgb(85,87,86)","white","Dark!")
		localStorage.setItem('defaultTheme','dark');
		$darkTheme = true
	} else {
		updateView("white","rgb(85,87,86)","Light!")
		localStorage.removeItem('defaultTheme');
		$darkTheme = false
	}
}

function updateView(bgColor,textColor,themeInfo) {
	document.body.style.backgroundColor = bgColor
		document.body.style.color = textColor
		document.getElementById('themeInfo').innerHTML = themeInfo
}