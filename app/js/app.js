'use strict';

document.addEventListener("DOMContentLoaded", function() {

	//----------------------FIXED-HEADER-----------------------
		const headerFixed = (headerFixed, headerActive) => {
			const header =  document.querySelector(headerFixed),
						active = headerActive.replace(/\./, '');
	
			window.addEventListener('scroll', function() {
				const top = pageYOffset;
				
				if (top >= 90) {
					header.classList.add(active);
				} else {
					header.classList.remove(active);
				}
	
			});
	
		};
		headerFixed('.header', '.header--active');

	//----------------------HAMBURGER-----------------------
		const hamburger = (hamburgerButton, hamburgerNav, hamburgerHeader) => {
			const button = document.querySelector(hamburgerButton),
						nav = document.querySelector(hamburgerNav),
						header = document.querySelector(hamburgerHeader);
	
			button.addEventListener('click', (e) => {
				button.classList.toggle('hamburger--active');
				nav.classList.toggle('header__nav--active');
				header.classList.toggle('header--menu');
			});
	
		};
		hamburger('.header__btn-menu', '.header__item', '.header');

	//----------------------MODAL-----------------------
		const modals = (modalSelector) => {
			const	modal = document.querySelectorAll(modalSelector);

			if (modal) {
				let i = 1;

				modal.forEach(item => {
					const wrap = item.id;
					const link = document.querySelectorAll('.' + wrap);

					link.forEach(linkItem => {
						let close = item.querySelector('.close');
							if (linkItem) {
								linkItem.addEventListener('click', (e) => {
									if (e.target) {
										e.preventDefault();
									}
									item.classList.add('modal--active');
								});
							}

							if (close) {
								close.addEventListener('click', () => {
									item.classList.remove('modal--active');
								});
							}

						item.addEventListener('click', (e) => {
							if (e.target === item) {
								item.classList.remove('modal--active');
							}
						});
					});
				});
			}

		};
		modals('.modal');

	//----------------------MODAL-----------------------
	const modalslike = (modalSelector) => {
		const	modal = document.querySelectorAll(modalSelector);

		if (modal) {
			let i = 1;

			modal.forEach(item => {
				const wrap = item.id;
				const link = document.querySelectorAll('.' + wrap);

				link.forEach(linkItem => {
					let close = item.querySelector('.close');
						if (linkItem) {
							linkItem.addEventListener('click', (e) => {
								if (e.target) {
									e.preventDefault();
								}
								item.classList.add('modal-like--activelike');
							});
						}

						if (close) {
							close.addEventListener('click', () => {
								item.classList.remove('modal-like--activelike');
							});
						}

					item.addEventListener('click', (e) => {
						if (e.target === item) {
							item.classList.remove('modal-like--activelike');
						}
					});
				});
			});
		}

	};
	modalslike('.modal-like');

	//----------------------TABS-JS----------------------
	const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
		const header = document.querySelector(headerSelector),
					tab = document.querySelectorAll(tabSelector),
					content = document.querySelectorAll(contentSelector);

		function hideTabContent() {
			content.forEach(item => {
				item.style.display = "none";
			});

			tab.forEach(item => {
				item.classList.remove(activeClass);
			});
		}

		function showTabContent(i = 0) {
			content[i].style.display = "block";
			tab[i].classList.add(activeClass);
		}

		hideTabContent();
		showTabContent();

		header.addEventListener('click', (e) => {
			const target = e.target;
			if (target && 
				(target.classList.contains(tabSelector.replace(/\./, '')) || 
				target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
				tab.forEach((item, i) => {
					if (target == item || target.parentNode == item) {
						hideTabContent();
						showTabContent(i);
					}
				});
			}
		});
	};
	tabs('.tabs', '.tabs__item', '.tabs__wrap', 'tabs--active');

});
