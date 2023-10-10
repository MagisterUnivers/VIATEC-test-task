import {
	StyledBlackTitle,
	StyledGreyTitle
} from 'components/TeacherCard/TeacherCard.styled';
import {
	StyledError,
	StyledForm,
	StyledFormInsight,
	StyledInput,
	StyledInputWrap,
	StyledLabel,
	StyledRadioInput,
	StyledRadioInputBox,
	StyledReasonText,
	StyledTeacherAvatar,
	StyledText,
	StyledTitle
} from './Forms.styled';
import { BookingSchema } from '../';
import { Button } from '../Button/Button';

export const BookLessonForm = ({
	teacherName,
	surname,
	avatar_url,
	setIsModalActive
}) => {
	//   const dispatch = useDispatch();

	return (
		<StyledForm
			initialValues={{
				reason: '',
				name: '',
				email: '',
				phone: ''
			}}
			validationSchema={BookingSchema}
		>
			{({ errors, touched, handleChange, setFieldTouched, values }) => (
				<StyledFormInsight>
					<StyledTitle>Book trial lesson</StyledTitle>
					<StyledText>
						Our experienced tutor will assess your current language level,
						discuss your learning goals, and tailor the lesson to your specific
						needs.
					</StyledText>
					<div
						style={{
							display: 'flex',
							gap: '14px',
							alignItems: 'center',
							marginBottom: '40px'
						}}
					>
						<StyledTeacherAvatar
							src={avatar_url}
							height="44px"
							width="44px"
							alt="Teacher avatar"
						/>

						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: '4px'
							}}
						>
							<StyledGreyTitle> Your teacher</StyledGreyTitle>
							<StyledBlackTitle>{`${teacherName} ${surname}`}</StyledBlackTitle>
						</div>
					</div>

					<StyledReasonText>
						What is your main reason for learning English?
					</StyledReasonText>
					<StyledRadioInputBox>
						<StyledLabel
							className={values.reason === 'Career and business' && 'checked'}
						>
							<StyledRadioInput
								type="radio"
								name="reason"
								value="Career and business"
							/>
							Career and business
						</StyledLabel>
						<StyledLabel
							className={values.reason === 'Lesson for kids' && 'checked'}
						>
							<StyledRadioInput
								type="radio"
								name="reason"
								value="Lesson for kids"
							/>
							Lesson for kids
						</StyledLabel>
						<StyledLabel
							className={values.reason === 'Living abroad' && 'checked'}
						>
							<StyledRadioInput
								type="radio"
								name="reason"
								value="Living abroad"
							/>
							Living abroad
						</StyledLabel>
						<StyledLabel
							className={values.reason === 'Exams and coursework' && 'checked'}
						>
							<StyledRadioInput
								type="radio"
								name="reason"
								value="Exams and coursework"
							/>
							Exams and coursework
						</StyledLabel>
						<StyledLabel
							className={
								values.reason === 'Culture, travel or hobby' && 'checked'
							}
						>
							<StyledRadioInput
								type="radio"
								name="reason"
								value="Culture, travel or hobby"
							/>
							Culture, travel or hobby
						</StyledLabel>
					</StyledRadioInputBox>
					<StyledInputWrap>
						<StyledInput
							type="text"
							name="name"
							placeholder="Full name"
							onChange={(e) => {
								setFieldTouched('name');
								handleChange(e);
							}}
							className={
								touched.name && !errors.name
									? 'valid-border'
									: errors.name && touched.name
									? 'invalid-border'
									: ''
							}
						/>
						{errors.name && touched.name ? (
							<StyledError>{errors.name}</StyledError>
						) : null}
						<StyledInput
							type="email"
							name="email"
							placeholder="Email"
							onChange={(e) => {
								setFieldTouched('email');
								handleChange(e);
							}}
							className={
								touched.email && !errors.email
									? 'valid-border'
									: errors.email && touched.email
									? 'invalid-border'
									: ''
							}
						/>
						{errors.email && touched.email ? (
							<StyledError>{errors.email}</StyledError>
						) : null}
						<StyledInput
							type="tel"
							name="phone"
							onChange={(e) => {
								setFieldTouched('phone');
								handleChange(e);
							}}
							placeholder="Phone number"
							className={
								touched.phone && !errors.phone
									? 'valid-border'
									: errors.phone && touched.phone
									? 'invalid-border'
									: ''
							}
						/>
						{errors.phone && touched.phone ? (
							<StyledError>{errors.phone}</StyledError>
						) : null}
					</StyledInputWrap>

					<Button type="submit" text="Book" />
				</StyledFormInsight>
			)}
		</StyledForm>
	);
};
