import React from 'react'
import { Divider, Image, Tag } from 'antd'
import { InfoCircleTwoTone } from '@ant-design/icons'
import { motion } from "framer-motion"
import { titleAnimation, titleAnimation2, yAnimation } from '../../constants/animation/AnimationConst'
import { dataTransformator, dataLinii,dataEfi,dataASKUE, dataKabel, dataAvaria } from '../../constants/service/ServiceConst'
import {
	useLocation,
} from 'react-router-dom'
import hours from '../../images/service/24-hours.svg'

export const ServicePage = () => {
	let data
	let location = useLocation()

	switch (location.pathname) {
		case '/uslugi/transformatornaya-podstantsiya':
			data = dataTransformator
			break
		case '/uslugi/liniya-elektroperedach':
			data = dataLinii
			break
		case '/uslugi/elektrofizicheskie-izmereniya':
			data = dataEfi
			break
		case '/uslugi/Podklyuchenie-ASKUE':
			data = dataASKUE
			break
		case '/uslugi/prokladka-i-remont-kabelya':
			data = dataKabel
			break
		case '/uslugi/avariinaya-sluzhba':
			data = dataAvaria
			break
	}

	return (
		<section className='pt-10'>
			{
				data.map(el => {
					return (
						<React.Fragment key={el.id}>
							<div className='px-5 pb-20'>
								<motion.div
									className=''
									initial="hidden"
									whileInView="visible"
								>
									<motion.h1
										className='text-2xl uppercase font-black'
										variants={titleAnimation}
									>
										{el.h1}
									</motion.h1>
									<motion.h2
										className='text-gray-700 '
										variants={titleAnimation2}
									>
										{el.h2} {' '} 
										{/* <Image src={hours} style={{width:'25px', marginTop:'5px'}} /> */}
								
									</motion.h2>
									
								</motion.div>
								<motion.div>
									<Image
										src={el.img}
										preview={false}
									/>
								</motion.div>

								<motion.div
									className='mt-10 overflow-hidden'
									initial="hidden"
									whileInView="visible"
								>
									<motion.div
										variants={yAnimation}
									>

										<h3 className='text-lg tracking-wider'>
											{el.h3}
										</h3>
										<ul className='font-light list-disc'>

											{el.list.map((elem, idx) => {
												return (
													<li className='mb-1' key={idx}>
														{elem}
													</li>
												)
											})}
										</ul>
										<p className='text-xs text-gray-600 font-light'>
											<InfoCircleTwoTone /> Стоимость и сроки Вы можете узнать позвонив по телефону +375 (29) 000-00-00 либо отправив нам сообщение (кнопка ниже). Выполняем работы как под ключ так и частями. Оплата производится двумя способами: наличным и безналичным способам (с заключением договора).
										</p>
										<Tag color="green">
											узнать стоимость и сроки
										</Tag>

									</motion.div>
								</motion.div>

								{el.list2 ?
									<>
										<Divider />
										<motion.div
											className='mt-10 overflow-hidden'
											initial="hidden"
											whileInView="visible"
										>
											<motion.div
												variants={yAnimation}
											>
												<h3 className='font-medium text-lg tracking-wider'>
													{el.h3_2}
												</h3>
												<ul className='font-light list-disc'>
													{
														el.list2.map((item, i) => {
															return (
																<li className='mb-1' key={i}>
																	{item}
																</li>
															)
														})
													}
												</ul>
												<p className='text-xs text-gray-600 font-light'>
													<InfoCircleTwoTone /> Стоимость и сроки Вы можете узнать позвонив по телефону (указан выше) либо отправив нам сообщение (кнопка ниже). Выполняем работы как под ключ так и отдельными частями.
												</p>
												<Tag color="green">
													узнать стоимость и сроки
												</Tag>
											</motion.div>
										</motion.div>
									</>
									:
									undefined
								}
							</div>

							<motion.div
								className='bg-[#313846] px-5 py-10 text-[#05d3ac] leading-6'
								initial="hidden"
								whileInView="visible"
							>
								<motion.div
									variants={titleAnimation}
								>
									<h3 className='font-bold'>
										{el.content.h3}</h3><p className='font-light'>{el.content.p}</p>
								</motion.div>
							</motion.div>
						</React.Fragment>
					)
				})
			}

		</section>
	)
}
