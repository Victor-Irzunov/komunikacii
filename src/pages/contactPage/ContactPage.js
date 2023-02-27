import React from 'react'

export const ContactPage = () => {
	return (
		<section className='px-5 pt-10'>
			<h1 className='text-2xl uppercase font-black mb-6'>
				Наши контакты

			</h1>
			<div className='text-lg font-extralight flex flex-col justify-between items-start'>
				<a href="https://yandex.by/maps/157/minsk/house/Zk4Ycg9pSEYOQFtpfXR4c3VrZw==/?ll=27.489139%2C53.892983&z=16.81"
					title="Наш адрес"
					target='_blank'
					rel="noreferrer"
					className='mb-3'
				>
					г.Минск, Пономаренко 41
				</a>
				<a
					href="mailto:brigady.by@gmail.com"
					title="Наша почта"
					className='mb-3'
				>
					brigady.by@gmail.com
				</a>
				<a href='tel:80293613612'>+375 (33) 361-36-12</a>
			</div>

			<div className='mt-10'>
				<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A62d6b997fc3d22af66bcfd2efa225700a1cec852805fca5f3b01359cd9237b41&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
			</div>
		</section>
	)
}
