'use client';

import dynamic from 'next/dynamic';

const NextNProgress = dynamic(() => import('nextjs-progressbar'), {
	ssr: false,
});

const NextProgress = () => {
	return (
		<NextNProgress
			height={5}
			color='linear-gradient(to right, #00c6ff, #0072ff)'
			options={{ easing: 'ease', speed: 500, showSpinner: false }}
		/>
	);
};

export default NextProgress;
