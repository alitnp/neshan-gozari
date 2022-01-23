import Step from 'components/home/steps/Step';

const data = [
	{
		step: 1,
		title: 'دریافت کلید API',
		text: `هدف نهایی سامانه امکان ثبت بین المللی شناسه آثار، کسب درآمد از
بازنشر محتوا در بستر های بین المللی، ارایه گزارش های پیشرفته آماری
از نحوه توزیع محتوا و کسب درآمد از طریق ابزارهای تبلیغاتی و نیز
پیگیری نقض حقوق صاحب محتوا به صورت بین المللی و همچنین کمک به بازنشر
قانونی محتوا در فضای مجازی می باشد.`,
	},
	{
		step: 2,
		title: 'دریافت کلید API',
		text: `هدف نهایی سامانه امکان ثبت بین المللی شناسه آثار، کسب درآمد از
بازنشر محتوا در بستر های بین المللی، ارایه گزارش های پیشرفته آماری
از نحوه توزیع محتوا و کسب درآمد از طریق ابزارهای تبلیغاتی و نیز
پیگیری نقض حقوق صاحب محتوا به صورت بین المللی و همچنین کمک به بازنشر
قانونی محتوا در فضای مجازی می باشد.`,
	},
	{
		step: 3,
		title: 'دریافت کلید API',
		text: `هدف نهایی سامانه امکان ثبت بین المللی شناسه آثار، کسب درآمد از
بازنشر محتوا در بستر های بین المللی، ارایه گزارش های پیشرفته آماری
از نحوه توزیع محتوا و کسب درآمد از طریق ابزارهای تبلیغاتی و نیز
پیگیری نقض حقوق صاحب محتوا به صورت بین المللی و همچنین کمک به بازنشر
قانونی محتوا در فضای مجازی می باشد.`,
	},
];

const Steps = () => {
	return (
		<div className='flex flex-col md:flex-row gap-4 mt-20'>
			{data.map((item) => (
				<Step
					key={item.step}
					step={item.step}
					title={item.title}
					text={item.text}
				/>
			))}
		</div>
	);
};

export default Steps;
