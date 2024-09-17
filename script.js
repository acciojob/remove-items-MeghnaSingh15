//your JS code here. If required.
let btn = document.querySelector('input[type="button"]');
btn.addEventListener("click",function() {
	let sel = document.getElementById("colorSelect");
	let dropdown = sel.options[sel.selectedIndex];

	if(dropdown) {
		sel.remove(sel.selectedIndex);
	}
});
