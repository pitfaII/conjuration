const countEl = document.getElementById("views");

updateVisitCount();

function updateVisitCount() {
	fetch("https://api.countapi.xyz/update/skidcrew/keymm/?amount=1")
		.then((res) => res.json())
		.then((res) => {
			countEl.innerHTML = res.value;
		});
}