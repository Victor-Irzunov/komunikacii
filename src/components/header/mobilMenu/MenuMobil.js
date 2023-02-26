import React, { useState } from 'react'
import { Button, Divider } from 'antd'
// import { motion } from "framer-motion"
// import { Link as LinkScroll } from 'react-scroll'
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
		<div className='h-full'>
			<nav className='h-full'>
				<ul className='h-full flex flex-col justify-between items-start text-sm cursor-pointer'>
					<li>
						<Link to='/'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Главная страница
						</Link>
					</li>
					<Divider style={{ marginTop: '7px', marginBottom: '7px' }} />
					<li>
						<Link to='/uslugi/transformatornaya-podstantsiya'
							className="cursor-pointe"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Строительство и ремонт трансформаторных подстанций
						</Link>
					</li>
					<Divider style={{ marginTop: '7px', marginBottom: '7px' }} />
					<li>
						<Link to='/uslugi/liniya-elektroperedach'

							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Строительство и ремонт линии электропередач
						</Link>
					</li>
					<Divider style={{ marginTop: '7px', marginBottom: '7px' }} />
					<li>
						<Link to='/uslugi/elektrofizicheskie-izmereniya'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Проведение электрофизических измерений
						</Link>
					</li>
					<Divider style={{ marginTop: '7px', marginBottom: '7px' }} />
					<li>
						<Link to='/uslugi/prokladka-i-remont-kabelya'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Прокладка и ремонт кабеля
						</Link>
					</li>
					<Divider style={{ marginTop: '7px', marginBottom: '7px' }} />
					<li>
						<Link to='/uslugi/podklyuchenie-elektrichestva'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Подключение электричества 0,4-10кВ
						</Link>
					</li>
					<Divider style={{ marginTop: '7px', marginBottom: '7px' }} />
					<li>
						<Link to='/uslugi/proektirovanie-elektrosnabzheniya'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Разработка проекта на электроснабжение
						</Link>
					</li>
					<Divider style={{ marginTop: '7px', marginBottom: '7px' }} />
					<li>
						<Link to='/uslugi/avariinaya-sluzhba'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Услуга аварийной бригады
						</Link>
					</li>
					<Divider style={{ marginTop: '7px', marginBottom: '7px' }} />
					<li>
						<Link to='/otzyvy'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Отзывы
						</Link>
					</li>
					<Divider style={{ marginTop: '7px', marginBottom: '7px' }} />
					<li>
						<Link to='/kontakt'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Контакты
						</Link>
					</li>
					<Divider style={{ marginTop: '7px', marginBottom: '7px' }} />
					<li className='mb-3 mt-5'>
						<Button
							type='text'
							onClick={() => showDrawer('top', 'Заказать звонок', 'tel')}
							style={{paddingLeft:'0px' }}
						>
							<icons.ShakeOutlined /> Заказать звонок
						</Button>
					</li>
					<li className='mb-3'>
						<Button
							type='text'
							onClick={() => showDrawer('right', 'Заказать на дату', 'date')}
							style={{paddingLeft:'0px' }}
						>
							<icons.CalendarOutlined /> Заказать на дату
						</Button>
					</li>
					<li className=''>
						<Button
							type='text'
							style={{ color: 'rgb(234,88,12', paddingLeft:'0px' }}
						>
							<a href='tel:80290000000'
							>
								<icons.PhoneOutlined className='rotate-90 animate-pulse' /><span className='uppercase ml-2'>Вызвать аварийную бригаду</span>
							</a>
						</Button>
					</li>

				</ul>
			</nav>
			<DrawerComp open={open} placement={placement} title={title} setOpen={setOpen} isActiveForm={isActiveForm} />
		</div>
	)
}
