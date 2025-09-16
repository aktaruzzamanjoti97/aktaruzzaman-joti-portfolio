/* eslint-disable react/no-unescaped-entities */
'use client';

import ProjectDetails from '@/components/ProjectDetails';
import { projectsdata } from '@/data/projectsdata';
import Head from 'next/head';
import { useParams } from 'next/navigation';

const Projectdetails = () => {
	const params = useParams();
	const projects = projectsdata();
	const projectId = typeof params.id === 'string' ? params.id : '1';
	const projectDetails = projects[parseInt(projectId)];
	const altt = projectDetails?.name + ' - ' + projectDetails?.title;

	return (
		<>
			<Head>
				<title>Project's Detail </title>
				<meta
					name='description'
					content={`Details of Projects developed.`}
				/>
				<link rel='icon' href='/favicon.ico' />
				<meta property='og:title' content={"Project's Detail "} />
				<meta
					name='description'
					content={`Details of Projects developed.`}
				/>
				<link rel='canonical' href={'https://www.rajsavaliya.com'} />
				<meta property='og:locale' content='en_US' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content={'https://www.rajsavaliya.com'} />
				<meta property='og:site_name' content='M. Aktaruzzaman Joti' />
				<meta property='og:image' content='/mainthumbnail.PNG' />
				<meta property='og:image:width' content='1040' />
				<meta property='og:image:height' content='600' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='HandheldFriendly' content='True' />
				<meta name='MobileOptimized' content='320' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<meta name='twitter:widgets:csp' content='on' />
			</Head>
			<ProjectDetails projectDetails={projectDetails} altt={altt} />
		</>
	);
};

export default Projectdetails;
