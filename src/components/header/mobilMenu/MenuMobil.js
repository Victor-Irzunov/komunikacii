import React, { useState } from 'react'
import { Button } from 'antd'
// import { motion } from "framer-motion"
import { Link as LinkScroll } from 'react-scroll'
import * as icons from '@ant-design/icons'
import { DrawerComp } from '../../drawer/DrawerComp'
import { Link } from 'react-router-dom'

export const MenuMobil = ({ onClose }) => {
	const [open, setOpen] = useState(false)

	const [placement, setPlacement] = useState('')
	const [title, setTitle] = useState('')
	const [isActiveForm, setIsActiveForm] = useState({
		tel: false,
		date: false,
		menu: false,
	})

	const showDrawer = (position, title, str) => {
		setOpen(true)
		setPlacement(position)
		setTitle(title)
		switch (str) {
			case 'tel': setIsActiveForm(prev => ({ ...prev, tel: true, date: false, menu: false }))
				break
			case 'date': setIsActiveForm(prev => ({ ...prev, tel: false, date: true, menu: false }))
				break
		}
	}


	return (
		<div className=''>
			<nav className='text-center'>
				<ul className='h-[50vh] flex flex-col justify-between items-center text-lg cursor-pointer'>
					<li>
						<LinkScroll to='main'
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							onClick={onClose}
						>
							Главная страница
						</LinkScroll>
					</li>
					{/* <li>
						<LinkScroll to='service'
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							onClick={onClose}
						>
							Услуги
						</LinkScroll>
					</li> */}
					<li>
						<Link to='/uslugi/transformatornaya-podstantsiya'
							className="cursor-pointer"
							onClick={onClose}
						>
							Трансформаторные подстанции
						</Link>
					</li>
					<li>
						<Link to='/uslugi/liniya-elektroperedach'

							className="cursor-pointer"
							onClick={onClose}
						>
							Линии электропередач
						</Link>
					</li>
					
					<li>
						<LinkScroll to='/uslugi/elektrofizicheskie-izmereniya'
							className="cursor-pointer"
							onClick={onClose}
						>
							Электрофизические измерения
						</LinkScroll>
					</li>
					<li>
						<Link to='/uslugi/prokladka-i-remont-kabelya'
							className="cursor-pointer"
							onClick={onClose}
						>
							Прокладка и ремонт кабеля
						</Link>
					</li>
					<li>
						<Link to='/uslugi/avariinaya-sluzhba'
							className="cursor-pointer text-orange-600"
							onClick={onClose}
						>
							Аварийная служба
						</Link>
					</li>
					<li>
						<Link to='/otzyvy'
							className="cursor-pointer text-orange-600"
							onClick={onClose}
						>
							Отзывы
						</Link>
					</li>
					<li>
						<Link to='/kontakt'
							className="cursor-pointer text-orange-600"
							onClick={onClose}
						>
							Контакты
						</Link>
					</li>
					
					<li className='mb-3 mt-5'>
						<Button
							type='primary'
							onClick={() => showDrawer('top', 'Заказать звонок', 'tel')}
							ghost
						>
							<icons.ShakeOutlined /> Заказать звонок
						</Button>
					</li>
					<li className='mb-3'>
						<Button
							type='primary'
							onClick={() => showDrawer('right', 'Заказать на дату', 'date')}
							ghost
						>
							<icons.CalendarOutlined /> Заказать на дату
						</Button>
					</li>
					<li className=''>
						<Button
							type='primary'
							ghost
						>
							<a href='tel:80291466601'>
								<icons.PhoneOutlined className='rotate-90 animate-pulse' /><span className='uppercase ml-2'>Вызвать аварийную службу</span>
							</a>
						</Button>
					</li>

				</ul>
				<div className='absolute bottom-1'>
					{/* <Image src={image} width='80%' /> */}
				</div>
			</nav>
			<DrawerComp open={open} placement={placement} title={title} setOpen={setOpen} isActiveForm={isActiveForm} />
		</div>
	)
}
