import React, { useState } from 'react'
import { Image, Button, Affix, Tooltip } from 'antd'
import logo from '../../../images/logo/logo.png'
// import telegram from '../../../images/social-icon/telegram.svg'
// import viber from '../../../images/social-icon/viber.svg'
// import whatsapp from '../../../images/social-icon/WhatsApp.svg'
import { ClockCircleOutlined, PhoneOutlined, ShakeOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { useScreens } from '../../../constants/Constants'
import { DrawerComp } from '../../drawer/DrawerComp'
import { motion } from "framer-motion"
import { yAnimation3} from '../../../constants/animation/AnimationConst'

export const HeaderInfo = ({ setIsVisible }) => {
	const screens = useScreens()
	const [open, setOpen] = useState(false)

	const showDrawer = () => {
		setOpen(true)
	}
	return (
		<>
			{
				screens.md
					?
					<div className='bg-gray-100'>
						<div className='container mx-auto px-10 flex justify-between items-center'>
							<div className='flex justify-start items-center'>
								<Image src={logo} preview={false} width='220px' />
							</div>


							<div className='flex text-xl items-center font-light text-[#000]'>
								<ClockCircleOutlined />
								<span className='uppercase ml-2  mr-0.5'>работаем 24</span>
								<span>/</span>
								<span className='uppercase ml-0.5'>7</span>
							</div>


							<div className=''>
								<div className='flex text-lg text-[#000]'>
									<PhoneOutlined className='rotate-90 mr-3 text-2xl' />
									<div className='flex items-end'>
										<a href='tel:80290000000' className='text-2xl'>+375 29 000-00-00</a>
										<span className='ml-1.5 font-extralight'>A1</span>
									</div>
								</div>
							</div>

							<div className='flex flex-col items-center'>
								<p className='text-sm text-[#000] mb-1 font-light'>Напишите нам</p>
							</div>
						</div>
					</div>
					:
					<motion.div
					initial="hidden"
					whileInView="visible"
					>
						<motion.div
							className='flex flex-col 
						justify-between items-center
						 text-[#05d3ac] pt-20 pb-3 
						 relative z-10 bg-[#313846]'
						 variants={yAnimation3}
						>
							<div className='flex text-lg items-center'>
								<ClockCircleOutlined />
								{/* text-[#fdd158] */}
								<span className='uppercase ml-2 font-semibold mr-0.5'>работаем 24</span>
								<span>/</span>
								<span className='uppercase ml-0.5 font-semibold'>7</span>
							</div>
							<div className='mt-2 mb-2'>
								<div className='text-lg '>
									<div className='flex items-end pl-7 text-white'>
										<a href='tel:80290000000' className='text-2xl '>+375 29 000-00-00</a>
										<span className='ml-1 font-extralight text-[15px]'>A1</span>
									</div>
								</div>
							</div>

							<div className='flex flex-col items-center'>
								<p className='text-sm mb-2 uppercase text-yellow-500' onClick={() => showDrawer('top', 'Заказать звонок')}>
									<ShakeOutlined /> Заказать звонок</p>
								{/* <div>
								<a fref='https://t.me/@'><Image src={telegram} style={{ width: '30px' }} /></a>
								<a fref='http://wa.me/375290000000?text=нужен%20эвакуатор%20'><Image src={whatsapp} style={{ width: '30px', marginLeft: '1.5em' }} /></a>
								<a fref='viber://add?number=375290000000'><Image src={viber} style={{ width: '30px', marginLeft: '1.5em' }} /></a>
							</div> */}
							</div>

							<div className='relative'>
								<Button type='primary' className='mt-3' style={{ backgroundColor: '#fff' }}>
									<a href='tel:80290000000' className=''>
										<PhoneOutlined className='rotate-90 animate-pulse text-red-600' /><span className='uppercase text-red-600'> Аварийная бригада 24/7</span>
									</a>
								</Button>
								<Tooltip placement="topRight" title='Выездная оперативная круглосуточная аварийная служба по ремонту электрооборудования.'>
									<QuestionCircleOutlined className='absolute top-5 -right-8' />
								</Tooltip>
							</div>


							<Affix offsetTop={30} onChange={() => setIsVisible(i => !i)}><div></div></Affix>
						</motion.div>
					</motion.div>
			}
			<DrawerComp open={open} placement={'top'} title={'Заказать звонок'} setOpen={setOpen} isActiveForm={{ tel: true }} />
		</>
	)
}
