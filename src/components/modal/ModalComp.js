import React from 'react'
import { Modal } from 'antd'
import { FormTel } from '../form/FormTel'
import { FormQuestion } from '../form/FormQuestion'

export const ModalComp = ({ isModalOpen, title, handleCancel, question }) => {

	return (
		<Modal
			title={title}
			open={isModalOpen}
			onCancel={handleCancel}
			centered
			footer={null}
		>
			{
				question ?
					<FormQuestion />
					:
					<FormTel
						btn={'Заказать эвакуатор'}
					/>
			}

		</Modal>
	)
}
