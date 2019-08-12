const jumbotronRightArrow = document.querySelector('.jumbotron-right-arrow');
const jumbotronLeftArrow = document.querySelector('.jumbotron-left-arrow');
const jumbotronFigures = document.querySelectorAll('.jumbotron_figure');
const aboutModals = [...document.querySelectorAll('.modal')];
const backdrop = document.querySelector('#backdrop');

// BACKDROP
const toggleBackdrop = () => {
	if (backdrop.classList.contains('backdrop')) {
		backdrop.classList.remove('backdrop');
		return backdrop.classList.add('backdrop-visible');
	} else {
		backdrop.classList.remove('backdrop-visible');
		aboutModals.forEach(
			modal => modal.classList.contains('modal_visible') && modal.classList.remove('modal_visible')
		);
		return backdrop.classList.add('backdrop');
	}
};

backdrop.addEventListener('click', toggleBackdrop);

// JUMBOTRON SLIDER
const moveJumbotronRight = () =>
	jumbotronFigures.forEach(figure => {
		if (figure.classList.contains('viewport-offset-0') || figure.classList.contains('viewport-offset-1')) {
			const currentOffset = figure.classList[1].slice(-1);
			figure.classList.remove(`viewport-offset-${currentOffset}`);
			return figure.classList.add(`viewport-offset-${Number(currentOffset) + 1}`);
		} else if (figure.classList.contains('viewport-offset-2')) {
			figure.classList.remove(`viewport-offset-2`);
			return figure.classList.add(`viewport-offset-0`);
		}
	});
const moveJumbotronLeft = () =>
	jumbotronFigures.forEach(figure => {
		if (figure.classList.contains('viewport-offset-0')) {
			figure.classList.remove(`viewport-offset-0`);
			return figure.classList.add(`viewport-offset-2`);
		} else if (figure.classList.contains('viewport-offset-1') || figure.classList.contains('viewport-offset-2')) {
			const currentOffset = figure.classList[1].slice(-1);
			figure.classList.remove(`viewport-offset-${currentOffset}`);
			return figure.classList.add(`viewport-offset-${Number(currentOffset) - 1}`);
		}
	});

jumbotronRightArrow.addEventListener('click', moveJumbotronRight);
jumbotronLeftArrow.addEventListener('click', moveJumbotronLeft);

// CTA BUTTONS INSIDE PICTURE
const buttons = [
	document.querySelector('.about_picture_button_0'),
	document.querySelector('.about_picture_button_6'),
	document.querySelector('.about_picture_button_8')
];

const showModal = modalClass => {
	if (aboutModals.filter(modal => modal.classList.contains('modal_visible')).length >= 1) {
		return toggleBackdrop();
	} else {
		const modalMap = new Map();
		modalMap.set(0, '_ski');
		modalMap.set(6, '_new-york');
		modalMap.set(8, '_wilderness');
		const modal = aboutModals.find(modal => modal.classList.contains(`about${modalMap.get(Number(modalClass))}`));
		modal.classList.remove('modal');
		modal.classList.add('modal-visible');
		return toggleBackdrop();
	}
};
buttons.forEach(button => button.addEventListener('click', () => showModal(button.classList[1].slice(-1))));
