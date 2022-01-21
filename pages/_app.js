import Head from 'next/dist/shared/lib/head';
import { ConfigProvider } from 'antd';
import faIR from 'antd/lib/locale/fa_IR';
import '../styles/globals.css';
import '../styles/antCustomStyles.css';
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';
import Layout from 'components/global/layout/Layout';
import Content from 'components/global/layout/content/Content';
import Sidebar from 'components/global/layout/sidebar/Sidebar';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'redux/store';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link
					rel='preload'
					href='/fonts/IRANSansWeb_Black.woff2'
					as='font'
					crossOrigin=''
				/>
				<link
					rel='preload'
					href='/fonts/IRANSansWeb_Bold.woff2'
					as='font'
					crossOrigin=''
				/>
				<link
					rel='preload'
					href='/fonts/IRANSansWeb_Medium.woff2'
					as='font'
					crossOrigin=''
				/>
				<link
					rel='preload'
					href='/fonts/IRANSansWeb_Light.woff2'
					as='font'
					crossOrigin=''
				/>
				<link
					rel='preload'
					href='/fonts/IRANSansWeb_UltraLight.woff2'
					as='font'
					crossOrigin=''
				/>
				<link
					rel='preload'
					href='/fonts/IRANSansWeb.woff2'
					as='font'
					crossOrigin=''
				/>

				<link rel='icon' href='/favicon.ico' />
			</Head>
			<ReduxProvider store={store}>
				<ConfigProvider local={faIR} direction='rtl'>
					<Layout>
						<Sidebar />
						<Content>
							<Component {...pageProps} />
						</Content>
					</Layout>
				</ConfigProvider>
				<ToastContainer rtl position='top-right' pauseOnFocusLoss={false} />
			</ReduxProvider>
		</>
	);
}

export default MyApp;
