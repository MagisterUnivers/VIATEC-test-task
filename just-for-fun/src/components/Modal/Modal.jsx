import { useEffect } from 'react';
import { CgClose } from 'react-icons/cg';
import { taskNameSchema } from './ValidationSchema';
import { Button } from '../Button/Button';
import {
	StyledBackdrop,
	StyledCloseBtn,
	StyledModalBox,
	StyledModalBoxScroll
} from './Modal.styled';
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
	StyledText,
	StyledTitle
} from './ModalForm.styled';

export const Modal = ({ isModalActive, setActive, children }) => {
	useEffect(() => {
		const handleCloseByEsc = (e) => {
			if (e.code !== 'Escape') {
				return;
			}
			setActive(false);
		};

		window.addEventListener('keydown', handleCloseByEsc);

		return () => {
			window.removeEventListener('keydown', handleCloseByEsc);
		};
	}, [setActive]);

	return (
		<StyledBackdrop
			className={isModalActive ? 'active' : ''}
			onClick={() => {
				setActive(false);
			}}
		>
			<StyledModalBoxScroll>
				<StyledModalBox
					className={isModalActive ? 'active' : ''}
					onClick={(e) => e.stopPropagation()}
				>
					<StyledCloseBtn
						type="button"
						onClick={() => {
							setActive(false);
						}}
					>
						{<CgClose size="32" />}
					</StyledCloseBtn>
					{/*  */}
					<StyledForm
						initialValues={{
							status: '',
							reason: '',
							task: ''
						}}
						validationSchema={taskNameSchema}
					>
						{({ errors, touched, handleChange, setFieldTouched, values }) => (
							<StyledFormInsight>
								<StyledTitle>Task manager</StyledTitle>
								<StyledText>Here you can add | edit your task</StyledText>
								<StyledReasonText>
									Here you can edit the status of your task
								</StyledReasonText>
								<StyledInputWrap>
									<select
										name="status"
										onChange={(e) => {
											setFieldTouched('status');
											handleChange(e);
										}}
										value={values.status || ''}
										className={
											touched.status && !errors.status
												? 'valid-border'
												: errors.status && touched.status
												? 'invalid-border'
												: ''
										}
									>
										<option value="" disabled>
											Select status | Default status
										</option>
										<option value="completed">Completed</option>
										<option value="notCompleted">Not Completed</option>
									</select>
									{errors.status && touched.status ? (
										<StyledError>{errors.status}</StyledError>
									) : null}
								</StyledInputWrap>
								<StyledInputWrap>
									<StyledInput
										type="text"
										name="task"
										placeholder="Task description "
										onChange={(e) => {
											setFieldTouched('task');
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
								</StyledInputWrap>

								<Button type="button" text="Add task" />
							</StyledFormInsight>
						)}
					</StyledForm>
					{/*  */}
				</StyledModalBox>
			</StyledModalBoxScroll>
		</StyledBackdrop>
	);
};
