import React from 'react'
import { motion } from "framer-motion"
import { titleAnimation2, titleAnimation } from '../../constants/animation/AnimationConst'

export const SectionGreyMain = () => {
	return (
		<section className='bg-[#313846] text-white px-5 py-10 mt-20'>
			<motion.div
				className=''
				initial="hidden"
				whileInView="visible"
			>
				<motion.h4
					className='text-2xl'
					variants={titleAnimation}
				>
					ООО "ЭнергоРемКомплект"
				</motion.h4>
				<motion.p
					className='font-light leading-6 text-lg tracking-wide'
					variants={titleAnimation2}
				>
					Наша компания основана в 2000 году, за более чем 20 лет мы получили огромный опыт и собрали команду настоящих профессионалов. 
					Обращаясь в нашу компанию Вы получаете качественный сервис по монтажу и ремонту электрооборудования по доступных ценам.
				</motion.p>
			</motion.div>
		</section>
	)
}
