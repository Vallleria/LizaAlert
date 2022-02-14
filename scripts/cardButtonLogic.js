const allButtons = document.querySelectorAll(".button");
allButtons.forEach((item) => {
	item.addEventListener("click", () => {
		if (
			!item.classList.contains("button_status_active") &&
			!item.classList.contains("button_status_disabled")
		) {
			item.classList.add("button_status_active");
			item.classList.remove("button_status_ready");
			item.innerText = "Продолжить";
		}
	});
});
