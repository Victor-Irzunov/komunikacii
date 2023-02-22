import React from 'react'
import CarouselComp from '../../components/carousel/CarouselComp'
import { SectionGreyMain } from '../../components/main/SectionGreyMain'
import { SectionServiceMainPageComp } from '../../components/main/SectionServiceMainPageComp'
import { useScreens } from '../../constants/Constants'
import { FloatButton } from 'antd'
import { motion } from "framer-motion"
import { titleAnimation2,titleAnimation } from '../../constants/animation/AnimationConst'

export const MainPage = () => {
	const screens = useScreens()

	return (
		<div className=''>
			{
				screens.md ?
					<div className=''>
						<div className='container mx-auto px-10'>
							<CarouselComp />
							<div className='pt-6'>
								<h1 className='text-2xl font-black uppercase tracking-wide'>Строительство и обслуживание электрооборудования</h1>

								<p className='mt-6 font-light'>
									Оказываем полный комплекс услуг на любых объектах под ключ в<span className='font-bold'> Минске и Минской области</span>
								</p>
							</div>

						</div>
					</div>
					:
					<div className=''>
						<CarouselComp />
						<div className='container px-5 mt-12'>
							<motion.div
								className=''
								initial="hidden"
								whileInView="visible"
							>
								<motion.h1
									className='text-2xl font-black uppercase tracking-wide'
									variants={titleAnimation}
								>
									Строительство и обслуживание электрооборудования
								</motion.h1>

								<motion.p
									className='mt-6 font-light'
									variants={titleAnimation2}
								>
									Оказываем полный комплекс услуг на любых объектах под ключ в<span className='font-bold'> Минске и Минской области</span>
								</motion.p>
							</motion.div>

						</div>
					</div>
			}


			<SectionServiceMainPageComp />

			<SectionGreyMain />


			<FloatButton.BackTop />
		</div>
	)
}
