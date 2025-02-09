const loadHeader = async () => {
	document.body.style.display = "none";
	const fetchHeader = await fetch("/components/header.html");
	const header = await fetchHeader.text();
	const headerElem = document.createElement("header");

	headerElem.innerHTML = header;

	document.body.prepend(headerElem);

	window.onscroll = () => {
		const header = document.querySelector("header");
		if (window.scrollY > 148) {
			header.classList.add("header-relaxed");
		} else {
			header.classList.remove("header-relaxed");
		}
	};

	document.body.style.display = "flex";
};

loadHeader();
