const getShit = () => {

	fetch('/adventure_data')
	.then(res => res.json())
	.then(data => {
		console.log(data)
	})
	.catch(err => console.log(err))
};

const dataEntry = data => {
	console.log(data)

	// Object.keys(data).map(table => {
	// 	return ($'updatedDataDisplay').append(
	// 		`
	// 		<div id={${ table.db }_ID_${ table.id }} class="data_container">

	// 		<div>
	// 		`	
	// 	)
	// })
}






$('#button').on('click', () => {
	getShit()
});

$('#test_button').on('click', () => {

	const entryData = {
			userName: $('#user_name').val(),
			first_name: $('#first_name').val(),
			last_name: $('#last_name').val(),
			relation: $('#_relation').val(),
			street_1: $('#street_1').val(),
			street_2: $('#street_2').val(),
			city: $('#_city').val(),
			state: $('#_state').val(),
			zip: $('#_zip').val(),
			email: $('#email').val(),
			phone_number: $('#phone_number').val()
		}
	console.log( entryData )

	fetch('/postToPrimaryContactData', {
		method: 'POST',
		body: JSON.stringify(entryData),
		header: "Content-Type": "application/json"
	})
	.then(resp => resp.json())
	.then(data => {

	})

});


$(document).ready(() => {
	getShit()
});