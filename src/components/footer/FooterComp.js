// import { Button } from 'antd'
import React from 'react'
import { motion } from "framer-motion"

export const FooterComp = () => {

  const titleAnimation = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.7
      }
    }
  }
  const titleAnimation2 = {
    hidden: {
      y: -100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.7
      }
    }
  }

  const adressAnimation = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 1.7
      }
    }
  }

  return (
    <footer className='pt-10 bg-white h-[50vh] overflow-hidden relative'>
      <div className='container px-5'>
        <div className='flex flex-col justify-between'>
          <motion.div
            initial="hidden"
            whileInView="visible"
            className='flex'
          >
            <motion.h2
              variants={titleAnimation}
              className='text-2xl font-extrabold uppercase mr-1'
            >
              ООО
            </motion.h2>
            <motion.h2
              variants={titleAnimation2}
              className='text-2xl font-extrabold uppercase'
            >
              ЭнергоРемКомплект
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            className='flex flex-col justify-between'
          >
            <motion.p
              variants={adressAnimation}
              className='font-light'
            >
              Выполняем любые работы по строительству, обслуживанию и ремонту элекстрических установок и оборудования.
            </motion.p>
            <motion.div
              variants={adressAnimation}
              className='flex justify-between items-center'>
              <div className='text-lg font-extralight'>
                <p className='mb-2'>г.Минск, Пономаренко 41</p>
                <a
                  href="mailto:brigady.by@gmail.com"
                  title="Наша почта"
                  className='mb-3'
                >
                  <p>brigady.by@gmail.com</p>
                </a>
                <a href='tel:80293613612'>+375 (33) 361-36-12</a>
              </div>
            </motion.div>
          </motion.div>

          <div className='flex items-center absolute bottom-1'>
            <p className="
              font-poppins
              font-normal
              text-center
              sm:text-[14px]
              xy:text-[10px]
              leading-[27px]
              text-gray-500
              opacity-40
              hover:opacity-90
              "
            >
              Copyright Ⓒ 2023. Разработка и продвижение <a href="https://vi-tech.by" className="text-gradient" rel="noreferrer" target="_blank">VI:TECH</a>. &nbsp;
            </p>
          </div>
        </div>
      </div>
    </footer >
  )
}
