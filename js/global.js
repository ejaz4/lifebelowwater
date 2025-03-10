let hamburgerToggled = false;
const toggleHamburger = () => {
	const trigger = document.getElementById("hamburger-trigger");

	hamburgerToggled = !hamburgerToggled;
	if (hamburgerToggled) {
		trigger.href = "#navigation-menu";
		trigger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
	} else {
		trigger.href = "#closed";
		trigger.innerHTML = `<svg
			xmlns="http://www.w3.org/2000/svg"
			width="28"
			height="28"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-menu"
		>
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>`;
	}
};

const loadHeader = async () => {
	document.body.style.display = "none";
	// const fetchHeader = await fetch("/components/header.html");
	// const header = await fetchHeader.text();
	// const headerElem = document.createElement("header");

	// headerElem.innerHTML = header;

	// document.body.prepend(headerElem);

	window.onscroll = () => {
		const header = document.querySelector("header");
		if (window.scrollY > 148) {
			header.classList.add("header-relaxed");
		} else {
			header.classList.remove("header-relaxed");
		}
	};

	const highlightCurrentPage = () => {
		// Get navigation
		const menu = document.getElementById("navigation-menu");

		const links = menu.getElementsByTagName("a");

		const currentPath = window.location.pathname;
		console.log(currentPath);

		for (let link of links) {
			const href = link.getAttribute("href");
			console.log(href, currentPath);
			if (currentPath.endsWith(href)) {
				link.classList.add("current-page");
			}
		}
	};

	document.body.style.display = "flex";
	document
		.getElementById("hamburger-trigger")
		.addEventListener("click", toggleHamburger);

	highlightCurrentPage();
};

// const loadFooter = async () => {
// 	document.body.style.display = "none";
// 	const fetchFooter = await fetch("/components/footer.html");
// 	const footer = await fetchFooter.text();
// 	const footerElem = document.createElement("footer");

// 	footerElem.innerHTML = footer;

// 	document.body.appendChild(footerElem);
// };

loadHeader();
// loadFooter();
