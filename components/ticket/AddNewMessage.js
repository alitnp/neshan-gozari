import MyButton from 'components/UI/myButton/MyButton';
import MyInput from 'components/UI/myInput/MyInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addNewMessage } from 'redux/middlewares/ticket/addNewMessage';

const AddNewMessage = ({ id }) => {
	//states
	const [message, setMessage] = useState('');
	const { loading } = useSelector((state) => state.ticket);

	//hooks
	const dispatch = useDispatch();

	//functions
	const sendMessage = () => {
		if (!message) return;
		dispatch(addNewMessage(id, message));
	};

	return (
		<div className='flex pt-4 border-t border-gray-300'>
			<MyInput
				placeholder='پیام جدید'
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				disabled={loading}
			/>
			<MyButton type='primary' onClick={sendMessage} loading={loading}>
				ارسال
			</MyButton>
		</div>
	);
};

export default AddNewMessage;
