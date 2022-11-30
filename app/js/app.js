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

	//---menu---
		const menu = (menuList, menuItem, menuBtn, menuApp) => {
			const list = document.querySelector(menuList)
			const item = document.querySelectorAll(menuItem)
			const btn = document.querySelector(menuBtn)
			const app = document.querySelector(menuApp)

			item.forEach((e) => {
				e.addEventListener('click', () => {
					list.classList.remove('header--menu');
					btn.classList.remove('hamburger--active');
					app.classList.remove('header__nav--active');
			})
			});

		}
		menu('.header', '.tabs__item', '.header__btn-menu', '.header__item')

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

});
