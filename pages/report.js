import { Form, Radio } from 'antd';
import ContentCard from 'components/global/contentCard/ContentCard';
import ContentTitle from 'components/global/contentCardTitle/ContentTitle';
import FormWrapper from 'components/global/formWrapper/FormWrapper';
import MyFormItem from 'components/UI/myFormItem/MyFormItem';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getStatistics } from 'redux/middlewares/report/getStatistics';
import { setReportRequestType } from 'redux/reducers/reportsReducer';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import { useState } from 'react';
import ShowInfo from 'components/global/showInfo/ShowInfo';

const ReportPage = () => {
	//state
	const {
		StatisticsRequestType: type,
		loading,
		data,
	} = useSelector((state) => state.report);
	const { userInfo } = useSelector((state) => state.user);
	const [tableType, setTableType] = useState('week');

	//hooks
	const dispatch = useDispatch();

	//effects
	useEffect(() => {
		userInfo && dispatch(getStatistics(type));
	}, [type, userInfo]);

	//functions
	const handleTypeChange = (e) => {
		dispatch(setReportRequestType(e.type));
	};
	const handleTableTypeChange = (e) => setTableType(e.tableType);
	const getData = (data) => {
		return data.map((item) => {
			return {
				name: item.title,
				[item.items[0].title]: item.items[0].count,
				[item.items[1].title]: item.items[1].count,
				[item.items[2].title]: item.items[2].count,
				[item.items[3].title]: item.items[3].count,
				[item.items[4].title]: item.items[4].count,
				[item.items[5].title]: item.items[5].count,
			};
		});
	};

	return (
		<>
			<ContentCard>
				<ContentTitle title='گزارش شناسایی ها' loading={loading} />
				<Form onValuesChange={handleTypeChange}>
					<FormWrapper>
						<MyFormItem label='نوع گرازش' name='type'>
							<Radio.Group defaultValue='Receive'>
								<Radio value='Receive'>دریافت</Radio>
								<Radio value='Request'>درخواست</Radio>
							</Radio.Group>
						</MyFormItem>
					</FormWrapper>
				</Form>
				<Form onValuesChange={handleTableTypeChange}>
					<FormWrapper>
						<MyFormItem label='بازه زمانی' name='tableType'>
							<Radio.Group defaultValue='week'>
								<Radio value='week'>هفته</Radio>
								<Radio value='month'>ماه</Radio>
								<Radio value='year'>سال</Radio>
							</Radio.Group>
						</MyFormItem>
					</FormWrapper>
				</Form>
				{data && (
					<>
						<p>آمار کل:</p>
						<div className='flex flex-wrap gap-x-6'>
							<ShowInfo right='امروز' left={data.recognize.today} nowrap />
							<ShowInfo right='هفته' left={data.recognize.week} nowrap />
							<ShowInfo right='ماه' left={data.recognize.month} nowrap />
							<ShowInfo right='سال' left={data.recognize.year} nowrap />
						</div>
						<div className='relative w-full mt-4 h-96'>
							<ResponsiveContainer width='100%' height='100%'>
								<LineChart
									width={500}
									height={300}
									data={getData(data[tableType])}
									margin={{
										top: 5,

										bottom: 5,
									}}
								>
									<CartesianGrid strokeDasharray='3 3' />
									<XAxis dataKey='name' />
									<YAxis />
									<Tooltip />
									<Legend height={36} margin={{ top: 50 }} />
									<Line
										type='monotone'
										dataKey={data[tableType][0].items[0].title}
										stroke='rgb(150, 97, 161)'
										activeDot={{ r: 6 }}
									/>
									<Line
										type='monotone'
										dataKey={data[tableType][1].items[1].title}
										stroke='rgb(96, 150, 161)'
										activeDot={{ r: 6 }}
									/>
									<Line
										type='monotone'
										dataKey={data[tableType][2].items[2].title}
										stroke='rgb(96, 97, 150)'
										activeDot={{ r: 6 }}
									/>
									<Line
										type='monotone'
										dataKey={data[tableType][3].items[3].title}
										stroke='rgb(250, 97, 161)'
										activeDot={{ r: 6 }}
									/>
									<Line
										type='monotone'
										dataKey={data[tableType][4].items[4].title}
										stroke='rgb(96, 20, 161)'
										activeDot={{ r: 6 }}
									/>
									<Line
										type='monotone'
										dataKey={data[tableType][5].items[5].title}
										stroke='rgb(96, 97, 250)'
										activeDot={{ r: 6 }}
									/>
								</LineChart>
							</ResponsiveContainer>
						</div>
					</>
				)}
			</ContentCard>
		</>
	);
};

export default ReportPage;
