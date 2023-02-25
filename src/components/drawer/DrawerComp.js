import React from 'react'
import { Drawer } from 'antd'
import { FormTel } from '../form/FormTel';
import { FormDate } from '../form/FormDate';
import { MenuMobil } from '../header/mobilMenu/MenuMobil';

export const DrawerComp = ({ open, placement, setOpen, isActiveForm, title }) => {
	const onClose = () => {
		setOpen(false)
	}

	return (
		<Drawer
			title={title}
			placement={placement}
			onClose={onClose}
			open={open}
			key={placement}
			// className='bg-[#313846]'
			// style={{background:'#313846'}}
		>
			{
				isActiveForm.tel && <FormTel />
			}
			{
				isActiveForm.date && <FormDate />
			}
			{
				isActiveForm.menu && <MenuMobil onClose={onClose} />
			}
		</Drawer>
	)
}
