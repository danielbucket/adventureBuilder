const getShit = () => {

	fetch('/adventure_data')
	.then(res => res.json())
	.then(data => {
		console.log(data)
	})
	.catch(err => console.log(err))
}

$('#button').on('click', () => {
	getShit()
})


$(document).ready(() => {
	getShit()
})