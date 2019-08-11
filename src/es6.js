const jumbotronRightArrow = document.querySelector('.jumbotron-right-arrow');
const jumbotronLeftArrow = document.querySelector('.jumbotron-left-arrow');
const jumbotronFigures = document.querySelectorAll('.jumbotron_figure');
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
