import * as Yup from 'yup';

export const taskNameSchema = Yup.object({
	taskname: Yup.string()
		.matches(
			/^[a-zA-Zа-яА-ЯґҐєЄіІїЇ]+\s[a-zA-Zа-яА-ЯґҐєЄіІїЇ]+$/,
			'2 words are required.'
		)
		.required('Required'),
	status: Yup.string().matches().required('Required')
});
