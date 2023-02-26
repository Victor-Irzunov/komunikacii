import React, { useState } from 'react'
import { Button, Popover, Rate, Avatar, Image,FloatButton } from 'antd'
import { ExclamationCircleOutlined, LineOutlined, UserOutlined } from '@ant-design/icons'
import { FormOtzyvy } from '../../components/form/FormOtzyvy'
import img1 from '../../images/otzyvy/1.webp'
import img2 from '../../images/otzyvy/2.webp'
import img3 from '../../images/otzyvy/3.webp'
import img4 from '../../images/otzyvy/4.webp'
import img5 from '../../images/otzyvy/5.webp'


const content = (
	<div>
		<p>Отзыв будет опубликован только если это отзыв клиента нашей службы и после проверки модератора.</p>
	</div>
)

export const OtzyvyPage = () => {
	const [add, setAdd] = useState(false)



	return (
		<section className='py-12 w-full z-10 min-h-[60vh]' id='otzyvy'>
			<FloatButton.BackTop />
			<div className='container'>
				<div className='text-center mb-12'>
					<h2 className='text-4xl uppercase'>Наши<span className='text-black'> отзывы</span></h2>
					<LineOutlined style={{ color: '#f8862e', fontSize: '3rem' }} />
				</div>

				<div className='px-5'>
					<div className='border-b pb-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									Д
								</Avatar>
							</div>
							<div className='ml-3 w-1/2'>
								<p className='mb-0 text-lg'>Луцевич Денис</p>
								<p className='text-xs mb-1'>Монтаж трансформаторной подстанции</p>
								<p className='text-[10px] text-gray-400'>23.08.2019</p>
								<Rate allowHalf defaultValue={5} />

							</div>
							<div className='w-1/4'>
								<Image src={img1} preview={false} className='rounded-sm' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4'>
								Обратились для установки трансформаторной подстанции для садового товорищества. Приехали и всё понятно объяснили, назвали сроки и стоимость, расчистили участок, привезли необходимое оборудование, установли всё аккуратно, немного сроки сместились, не критично, главное результатом мы довольны. Работу приняли, нас всё утраивает, будем рекомендовать.
							</p>
						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0'>Мария</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-gray-500 inline'>Спасибо за Ваш отзыв.</p>
							</div>
						</div>
					</div>


					<div className='border-b py-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									А
								</Avatar>
							</div>
							<div className='ml-3 w-1/2'>
								<p className='mb-0 text-lg'>Лукашевич Александра</p>
								<p className='text-xs mb-1'>Вызов аварийной бригады</p>
								<p className='text-[10px] text-gray-400'>11.12.2020</p>
								<Rate allowHalf defaultValue={4.5} />

							</div>
							<div className='w-1/4'>
								<Image src={img2} preview={false} className='rounded-sm' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4'>
								Живу за городом и пропало электричество у меня электрическое отопление, на улице ни у кого не было света, нашел в интернете этот сайт, вызвал бригаду, приехали через 40 минут, была проблема с кабелем, короткое замыкание, устранили проблему, я очень благодарен.
							</p>

						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0'>Мария</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-gray-500 inline'>Спасибо за отзыв. Мы делали свою работу.</p>
							</div>
						</div>
					</div>


					<div className='border-b py-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									C
								</Avatar>
							</div>
							<div className='ml-3 w-1/2'>
								<p className='mb-0 text-lg'>Бакун Сергей</p>
								<p className='text-xs mb-1'>Устранение предписаний энергонадзора</p>
								<p className='text-[10px] text-gray-400'>10.02.2021</p>
								<Rate allowHalf defaultValue={5} />

							</div>
							<div className='w-1/4'>
								<Image src={img3}  preview={false} className='rounded-sm' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4'>
								Была проверка энергонадзора, конечно же выписали предписание, своего электрика держать не выгодно, вызвали бригаду, всё устранили, быстро и просто.
							</p>

						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0'>Александра</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-gray-500 inline'>Спасибо за отзыв.</p>
							</div>
						</div>
					</div>

					<div className='border-b py-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									А
								</Avatar>
							</div>
							<div className='ml-3 w-1/2'>
								<p className='mb-0 text-lg'>Кравчинко Артём</p>
								<p className='text-xs mb-1'>Ремонт уличного освещения</p>
								<p className='text-[10px] text-gray-400'>02.09.2021</p>
								<Rate allowHalf defaultValue={5} />

							</div>
							<div className='w-1/4'>
								<Image src={img4} preview={false} className='rounded-sm' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4'>
								Вызывал так как не горел свет на улице, приехали рано утро с вышкой, все сделали, теперь на улице светло. Спасибо. Рекомендую.
							</p>

						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0'>Александра</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-gray-500 inline'>Спасибо за рекомендацию и отзыв.</p>
							</div>
						</div>
					</div>


					<div className='border-b py-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									М
								</Avatar>
							</div>
							<div className='ml-3 w-1/2'>
								<p className='mb-0 text-lg'>Ходосевич Марина</p>
								<p className='text-xs mb-1'>Установка АСКУЭ</p>
								<p className='text-[10px] text-gray-400'>22.07.2022</p>
								<Rate allowHalf defaultValue={4.7} />

							</div>
							<div className='w-1/4'>
								<Image src={img5} preview={false} className='rounded-sm' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4'>
								Прехали, установили, подключили.
							</p>

						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0'>Александра</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-gray-500 inline'>Спасибо за отзыв.</p>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-14'>
					<div
						style={{
							marginBottom: 16,
						}}
						className='flex items-center justify-end'
					>

						<Popover content={content} title={<div className='text-center'><ExclamationCircleOutlined className='text-2xl text-orange-500 ml-3' /></div>} trigger="click">
							<ExclamationCircleOutlined className='text-xl mr-5 text-orange-400' />
						</Popover>
						<Button onClick={() => setAdd(true)}>Добавить отзыв</Button>
					</div>
				</div>

				{

					add &&
					<div className='px-5'>
						<FormOtzyvy setAdd={setAdd} />
					</div>
				}

			</div>
		</section>
	)
}
