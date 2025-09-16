/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { DownIcon, RightIcon } from '../../components/IconsSVG';
import SidePanelSubLink from './SidePanelSubLink';

interface IProps {
	closeSideMenu: () => void;
}

export const SideSecondPanel: React.FC<IProps> = (props: any) => {
	const [aboutClose, setAboutClose] = useState(false);
	const [projectsClose, setProjectsClose] = useState(false);
	const [contactClose, setcontactClose] = useState(false);
	const [miscClose, setmiscClose] = useState(false);
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 943px)' });

	const router = useRouter();

	const [activeCurrentSubLink, setActiveCurrentSubLink] = useState('');
	useEffect(() => {
		// This code is inefficient and can be written better way, so feel free to raise a PR to the original Repository as your open source contribution
		const currentSubLink = window.location.href.split('/').pop();
		if (currentSubLink === 'Experience') {
			setActiveCurrentSubLink('experience.css');
		} else if (currentSubLink === 'Skills') {
			setActiveCurrentSubLink('skills.js');
		} else if (currentSubLink === 'Projects') {
			setActiveCurrentSubLink('projects.ts');
		} else if (currentSubLink === '1') {
			setActiveCurrentSubLink('1');
		} else if (currentSubLink === '2') {
			setActiveCurrentSubLink('2');
		} else if (currentSubLink === '3') {
			setActiveCurrentSubLink('3');
		} else if (currentSubLink === '4') {
			setActiveCurrentSubLink('4');
		} else if (currentSubLink === '5') {
			setActiveCurrentSubLink('5');
		} else if (currentSubLink === '6') {
			setActiveCurrentSubLink('6');
		} else if (currentSubLink === '') {
			setActiveCurrentSubLink('index.html');
		} else if (currentSubLink === 'Hobbies') {
			setActiveCurrentSubLink('Hobbies');
		} else if (currentSubLink === 'Blogs') {
			setActiveCurrentSubLink('Blogs');
		} else if (currentSubLink === 'Email') {
			setActiveCurrentSubLink('Email');
		} else if (currentSubLink === 'Gaming') {
			setActiveCurrentSubLink('Gaming');
		} else if (currentSubLink === 'Anime') {
			setActiveCurrentSubLink('Anime');
		} else if (currentSubLink === 'Learning') {
			setActiveCurrentSubLink('Learning');
		} else if (currentSubLink === 'Startup') {
			setActiveCurrentSubLink('Startup');
		}
	});

	return (
		<div className='menu-option overflow-hidden'>
			<h5 className='myweight '>EXPLORER</h5>
			<div
				className='mb-5 pb-5 z-1 scrollbar '
				style={{ height: '84%', overflowY: 'scroll' }}>
				<div className='menu-drop'>
					<div className='box-click'>
						<div
							className='flex pl-1 cursor-pointer'
							onClick={() => setAboutClose(!aboutClose)}>
							<div className='myweight flex-min topPadd'>
								{!aboutClose ? <DownIcon /> : <RightIcon />}
							</div>
							<span className='myweight flex-auto'>About</span>
						</div>
						{!aboutClose && (
							<div className='show-pre'>
								<ul>
									<li
										onClick={() => {
											router.push('/');
											isTabletOrMobile
												? props.closeSideMenu()
												: null;
										}}
										className={` smallSide ${
											activeCurrentSubLink === 'index.html'
												? 'active'
												: ''
										}`}>
										<SidePanelSubLink
											name='index.html'
											link='/'
											icon={<span className='icons8-html-5'></span>}
										/>
									</li>
									<li
										onClick={() => {
											router.push('/experience');
											isTabletOrMobile
												? props.closeSideMenu()
												: null;
										}}
										className={`smallSide ${
											activeCurrentSubLink === 'experience.css'
												? 'active'
												: ''
										}`}>
										<SidePanelSubLink
											name='experience.css'
											link='/Experience'
											icon={<span className='icons8-css3'></span>}
										/>
									</li>
									<li
										onClick={() => {
											router.push('/skills');
											isTabletOrMobile
												? props.closeSideMenu()
												: null;
										}}
										className={` smallSide ${
											activeCurrentSubLink === 'skills.js'
												? 'active'
												: ''
										}`}>
										<SidePanelSubLink
											name='skills.js'
											link='/Skills'
											icon={
												<span className='icons8-javascript'></span>
											}
										/>
									</li>
									<li
										onClick={() => {
											router.push('/projects');
											isTabletOrMobile
												? props.closeSideMenu()
												: null;
										}}
										className={`smallSide ${
											activeCurrentSubLink === 'projects.ts'
												? 'active'
												: ''
										}`}>
										<SidePanelSubLink
											name='projects.ts'
											link='/projects'
											icon={
												<span className='icons8-typescript'></span>
											}
										/>
									</li>
								</ul>
							</div>
						)}
					</div>
				</div>
				<div className='menu-drop pt-1'>
					<div className='box-click'>
						<div
							className='flex pl-1 cursor-pointer'
							onClick={() => setProjectsClose(!projectsClose)}>
							<div className='myweight flex-min topPadd'>
								{!projectsClose ? <DownIcon /> : <RightIcon />}
							</div>
							<span className='myweight flex-auto'>Side Projects</span>
						</div>
						{!projectsClose && (
							<div className='show-pre'>
								<ul>
									<li
										onClick={() => {
											router.push('/projects/1');
											isTabletOrMobile
												? props.closeSideMenu()
												: null;
										}}
										className={` smallSide ${
											activeCurrentSubLink === '1' ? 'active' : ''
										}`}>
										<SidePanelSubLink
											name='Ayedot.js'
											link='/projects/1'
											icon={<span className='icons8-nodejs'></span>}
										/>
									</li>
									<li
										onClick={() => {
											router.push('/projects/2');
											isTabletOrMobile
												? props.closeSideMenu()
												: null;
										}}
										className={` smallSide ${
											activeCurrentSubLink === '2' ? 'active' : ''
										}`}>
										<SidePanelSubLink
											name='Ayefan.js'
											link='/projects/2'
											icon={<span className='icons8-react'></span>}
										/>
									</li>
									<li
										onClick={() => {
											router.push('/projects/3');
											isTabletOrMobile
												? props.closeSideMenu()
												: null;
										}}
										className={` smallSide ${
											activeCurrentSubLink === '3' ? 'active' : ''
										}`}>
										<SidePanelSubLink
											name='Onwos.ts'
											link='/projects/3'
											icon={
												<span className='icons8-angularjs'></span>
											}
										/>
									</li>
									<li
										onClick={() => {
											router.push('/projects/4');
											isTabletOrMobile
												? props.closeSideMenu()
												: null;
										}}
										className={` smallSide ${
											activeCurrentSubLink === '4' ? 'active' : ''
										}`}>
										<SidePanelSubLink
											name='fireflow.js'
											link='/projects/4'
											icon={<span className='icons8-react'></span>}
										/>
									</li>
									<li
										onClick={() => {
											router.push('/projects/5');
											isTabletOrMobile
												? props.closeSideMenu()
												: null;
										}}
										className={` smallSide ${
											activeCurrentSubLink === '5' ? 'active' : ''
										}`}>
										<SidePanelSubLink
											name='Shortlit.js'
											link='/projects/5'
											icon={<span className='icons8-nodejs'></span>}
										/>
									</li>
									<li
										onClick={() => {
											router.push('/projects/6');
											isTabletOrMobile
												? props.closeSideMenu()
												: null;
										}}
										className={` smallSide ${
											activeCurrentSubLink === '6' ? 'active' : ''
										}`}>
										<SidePanelSubLink
											name='Xport.js'
											link='/projects/6'
											icon={<span className='icons8-react'></span>}
										/>
									</li>
								</ul>
							</div>
						)}
					</div>
				</div>
				<div className='menu-drop pt-1 '>
					<div className='box-click'>
						<div
							className='flex pl-1 cursor-pointer'
							onClick={() => setcontactClose(!contactClose)}>
							<div className='myweight flex-min topPadd'>
								{!contactClose ? <DownIcon /> : <RightIcon />}
							</div>
							<span className='myweight flex-auto'>Contact</span>
						</div>
						{!contactClose && (
							<div className='show-pre'>
								<ul>
									<li
										onClick={() => {
											router.push('/email');
											isTabletOrMobile
												? props.closeSideMenu()
												: null;
										}}
										className={` smallSide ${
											activeCurrentSubLink === 'Email'
												? 'active'
												: ''
										}`}>
										<SidePanelSubLink
											name='Email.tsx'
											link='/Email'
											icon={<span className='icons8-gmail'></span>}
										/>
									</li>
								</ul>
							</div>
						)}
					</div>
				</div>
				<div className='menu-drop pt-1 pb-12'>
					<div className='box-click'>
						<div
							className='flex pl-1 cursor-pointer'
							onClick={() => setmiscClose(!miscClose)}>
							<div className='myweight flex-min topPadd'>
								{!miscClose ? <DownIcon /> : <RightIcon />}
							</div>
							<span className='myweight flex-auto'>Misc</span>
						</div>
						{!miscClose && (
							<div className='show-pre'>
								<ul>
									<li
										onClick={() => {
											router.push('/hobbies');
											isTabletOrMobile
												? props.closeSideMenu()
												: null;
										}}
										className={` smallSide ${
											activeCurrentSubLink === 'Hobbies'
												? 'active'
												: ''
										}`}>
										<SidePanelSubLink
											name='Hobbies.cpp'
											link='/Hobbies'
											icon={
												<span className='icons8-cplusplus'></span>
											}
										/>
									</li>
									<li
										onClick={() => {
											router.push('/blogs');
											isTabletOrMobile
												? props.closeSideMenu()
												: null;
										}}
										className={` smallSide ${
											activeCurrentSubLink === 'Blogs'
												? 'active'
												: ''
										}`}>
										<SidePanelSubLink
											name='Blogs.py'
											link='/Blogs'
											icon={
												<span className='icons8-typescript'></span>
											}
										/>
									</li>
									<li
										onClick={() => {
											router.push('/gaming');
											isTabletOrMobile
												? props.closeSideMenu()
												: null;
										}}
										className={` smallSide ${
											activeCurrentSubLink === 'Gaming'
												? 'active'
												: ''
										}`}>
										<SidePanelSubLink
											name='Gaming.sln'
											link='/Gaming'
											icon={<span className='icons8-c-sharp'></span>}
										/>
									</li>
									<li
										onClick={() => {
											router.push('/anime');
											isTabletOrMobile
												? props.closeSideMenu()
												: null;
										}}
										className={` smallSide ${
											activeCurrentSubLink === 'Anime'
												? 'active'
												: ''
										}`}>
										<SidePanelSubLink
											name='Anime.jsx'
											link='/Anime'
											icon={<span className='icons8-react'></span>}
										/>
									</li>
									<li
										onClick={() => {
											router.push('/learning');
											isTabletOrMobile
												? props.closeSideMenu()
												: null;
										}}
										className={` smallSide ${
											activeCurrentSubLink === 'Learning'
												? 'active'
												: ''
										}`}>
										<SidePanelSubLink
											name='Learning.ts'
											link='/Learning'
											icon={
												<span className='icons8-angularjs'></span>
											}
										/>
									</li>
									<li
										onClick={() => {
											router.push('/startup');
											isTabletOrMobile
												? props.closeSideMenu()
												: null;
										}}
										className={` smallSide ${
											activeCurrentSubLink === 'Startup'
												? 'active'
												: ''
										}`}>
										<SidePanelSubLink
											name='Startup.js'
											link='/Startup'
											icon={<span className='icons8-nodejs'></span>}
										/>
									</li>
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>
			{!isTabletOrMobile && (
				<ul className='bottom-links  pl-2'>
					<li className='border-b border-solid border-gray-500 '>
						<span className='text-gray-400'>All Rights Reserved. </span>
					</li>
					<li>
						<span className='text-gray-400'> Ⓒ Copyright 2023. </span>
					</li>
				</ul>
			)}
		</div>
	);
};
