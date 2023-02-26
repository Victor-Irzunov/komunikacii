import React, { useState } from 'react'
import { useScreens } from '../../../constants/Constants'
import { Affix, Button, Divider, Image } from 'antd'
import { motion, AnimatePresence } from "framer-motion"
import { ShakeOutlined, CalendarOutlined, MenuOutlined } from '@ant-design/icons'
import { DrawerComp } from '../../drawer/DrawerComp'
import logo from '../../../images/logo/logo.png'
// import { Link as LinkScroll } from 'react-scroll'
import { Link } from 'react-router-dom'

export const HeaderMenu = ({ isVisible, setHover, hover }) => {
	const [isAffix, setIsAffix] = useState(false)
	const [placement, setPlacement] = useState('')
	const [title, setTitle] = useState('')
	const [isActiveForm, setIsActiveForm] = useState({
		tel: false,
		date: false,
		menu: false,
	})
	const screens = useScreens()
	const [open, setOpen] = useState(false)
	// const [hover, setHover] = useState(false)

	const handleMouseLeave = () => {
		setHover(false)
	}
	const handleMouseEnter = () => {
		setHover(true)
	}


	const showDrawer = (position, title, str) => {
		setOpen(true)
		setPlacement(position)
		setTitle(title)
		switch (str) {
			case 'tel': setIsActiveForm(prev => ({ ...prev, tel: true, date: false, menu: false }))
				break
			case 'date': setIsActiveForm(prev => ({ ...prev, tel: false, date: true, menu: false }))
				break
			case 'menu': setIsActiveForm(prev => ({ ...prev, tel: false, date: false, menu: true }))
				break
		}
	}

	return (
		<div className=''>
			{
				screens.sm ?
					<Affix
						offsetTop={0}
						className='z-50 relative'
						onChange={(affixed) => setIsAffix(affixed)}
					>
						<div
							className={isAffix ? 'absolute pt-4 pb-4 bg-[#313846] w-full' : `absolute pt-4 pb-4 bg-[#313846] shadow-xl w-full`}
						>
							<div className='container mx-auto px-10'>
								<nav>
									<ul
										className='flex justify-between 
										items-center text-lg font-light
										text-[#05d3ac] cursor-pointer
										 mb-0'
									>
										<li>
											<Link to='/'
												smooth={true}
												offset={-100}
												duration={800}
												className="cursor-pointer text-[#05d3ac]"
												onMouseEnter={handleMouseLeave}
											>
												Главная
											</Link>
										</li>
										<li>
											<Link to='#'
												smooth={true}
												offset={-100}
												duration={800}
												className="cursor-pointer"
												onMouseEnter={handleMouseEnter}
											>
												Услуги
											</Link>
										</li>

										<li>
											<Link to='/otzyvy'
												smooth={true}
												offset={-100}
												duration={800}
												className="cursor-pointer"
												onMouseEnter={handleMouseLeave}
											>
												Отзывы
											</Link>
										</li>
										<li>
											<Link to='/kontakt'
												smooth={true}
												offset={-100}
												duration={800}
												className="cursor-pointer"
												onMouseEnter={handleMouseLeave}
											>
												Контакты
											</Link>
										</li>
										<li className='ml-48'>
										</li>
										<li>
											<Button
												type='primary'
												ghost
												onMouseEnter={handleMouseLeave}
												onClick={() => showDrawer('top', 'Заказать звонок', 'tel')}>
												<ShakeOutlined /> Заказать звонок
											</Button>
										</li>
										<li>
											<Button
												type='primary'
												onMouseEnter={handleMouseLeave}
												ghost onClick={() => showDrawer('right', 'Заказать на дату', 'date')}>
												<CalendarOutlined /> Заказать на дату
											</Button>
										</li>
									</ul>
								</nav>
							</div>


							<AnimatePresence>
								{
									hover &&
									(<motion.div
										initial={{ heigth: 0, opacity: 0 }}
										animate={{ height: 'auto', opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.5, delay: 0.1 }}
										className='w-full mt-2'
										style={{ borderTop: '1px solid #ccc', zIndex: '100000' }}
									>
										<div className='container mx-auto px-10'>
											<div className=' text-[#05d3ac] pt-10 text-sm border-t-white font-light flex justify-between items-start'>
												<ul className='h-full text-sm cursor-pointer'>
													<li className='mb-5'>
														<Link to='/uslugi/transformatornaya-podstantsiya'
															className="cursor-pointe"
															onClick={handleMouseLeave}
														>
															Строительство и ремонт трансформаторных подстанций
														</Link>
													</li>
													<li className='mb-5'>
														<Link to='/uslugi/liniya-elektroperedach'
															onClick={handleMouseLeave}
															className="cursor-pointer"
														>
															Строительство и ремонт линии электропередач
														</Link>
													</li>
													<li className='mb-5'>
														<Link to='/uslugi/elektrofizicheskie-izmereniya'
															className="cursor-pointer"
															onClick={handleMouseLeave}
														>
															Проведение электрофизических измерений
														</Link>
													</li>
												</ul>

												<ul className='h-full text-sm cursor-pointer'>
													<li className='mb-5'>
														<Link to='/uslugi/prokladka-i-remont-kabelya'
															className="cursor-pointer"
															onClick={handleMouseLeave}
														>
															Прокладка и ремонт кабеля
														</Link>
													</li>
													<li className='mb-5'>
														<Link to='/uslugi/podklyuchenie-elektrichestva'
															className="cursor-pointer"
															onClick={handleMouseLeave}
														>
															Подключение электричества 0,4-10кВ
														</Link>
													</li>
													<li className='mb-5'>
														<Link to='/uslugi/proektirovanie-elektrosnabzheniya'
															className="cursor-pointer"
															onClick={handleMouseLeave}
														>
															Разработка проекта на электроснабжение
														</Link>
													</li>
												</ul>

												<ul className='h-full text-sm cursor-pointer'>
													<li className='mb-5'>
														<Link to='/uslugi/obsluzhivanie'
															className="cursor-pointer"
															onClick={handleMouseLeave}
														>
															Оперативно-техническое обслуживание электроустановок 0,4-10кВ
														</Link>
													</li>
													<li className='mb-5'>
														<Link to='/uslugi/Podklyuchenie-ASKUE'
															className="cursor-pointer"
															onClick={handleMouseLeave}
														>
															Подключение АСКУЭ
														</Link>
													</li>
													<li className='mb-5'>
														<Link to='/uslugi/avariinaya-sluzhba'
															className="cursor-pointer"
															onClick={handleMouseLeave}
														>
															Услуга аварийной бригады
														</Link>
													</li>
												</ul>


											</div>
										</div>
									</motion.div>)
								}
							</AnimatePresence>
						</div>

					</Affix>
					:
					<>
						<AnimatePresence>
							{!isVisible && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									className={`pt-1 bg-[#313846] shadow-xl fixed top-0 left-0 right-0 z-10`}
								>
									<div className='flex justify-center items-center'>
										<Link to='/'>
											<Image src={logo} preview={false} width='180px' />
										</Link>
									</div>


								</motion.div>
							)}
						</AnimatePresence>

						<div className='fixed top-2 right-2 p-3 border z-50'>
							<MenuOutlined
								className='text-4xl text-[#05d3ac]'
								onClick={() => showDrawer('right', 'Меню', 'menu')}
							/>
						</div>
					</>
			}
			<DrawerComp open={open} placement={placement} title={title} setOpen={setOpen} isActiveForm={isActiveForm} />
		</div>
	)
}
