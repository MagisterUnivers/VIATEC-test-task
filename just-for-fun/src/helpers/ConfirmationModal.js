import Notiflix from 'notiflix';

const handleYes = () => {
	console.log('User clicked "Yes"');
};

const showConfirmation = () => {
	Notiflix.Confirm.Init({
		titleColor: '#FFA500',
		okButtonColor: '#FFA500',
		cancelButtonColor: '#FFA500',
		messageFontSize: '18px',
		titleFontSize: '24px',
		fontFamily: 'Roboto'
	});

	Notiflix.Confirm.Show(
		'Confirmation',
		'Are you sure you want to continue?',
		'Yes',
		'No',
		handleYes,
		() => {
			Notiflix.Report.Info(
				'Info',
				'You clicked "No". It seems you change your mind'
			);
		}
	);
};

showConfirmation();
