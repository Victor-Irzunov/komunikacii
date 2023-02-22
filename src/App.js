import './App.css'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import React, { createContext, useState, useEffect } from 'react'
import { Spin, ConfigProvider } from 'antd'
import { observer } from "mobx-react-lite"
import BreadCrumbComp from './components/breadcrumb/BreadcrumbComp'
import { FooterComp } from './components/footer/FooterComp'
import Scroll from './hoc/Scroll'
import DataStore from './store/DataStore'
import ErrorPage from './pages/errorPage/ErrorPage'
import locale from 'antd/es/locale/ru_RU'
import { Header } from './components/header/Header'
import { MainPage } from './pages/mainPage/MainPage'

import { StyleProvider } from '@ant-design/cssinjs'
import 'antd/dist/reset.css'
import { ServicePage } from './pages/servicePage/ServicePage'
import { OtzyvyPage } from './pages/otzyvyPage/OtzyvyPage'
import { ContactPage } from './pages/contactPage/ContactPage'

export const Context = createContext(null)



function App() {
  const [dataApp] = useState(new DataStore())


  return (
    <ConfigProvider
      locale={locale}
      theme={{
        token: {
          colorPrimary: '#05d3ac',
          colorLink: '#05d3ac',
        },
      }}
    >
      <Context.Provider
        value={{
          dataApp,
        }}
      >
        <StyleProvider hashPriority="high">
          <BrowserRouter>
            <div className="app bg-[#f8f8f8]">
              <div className=''>
                <Header />

                <main className=''>
                  <BreadCrumbComp />
                  <Scroll>
                    <Routes>
                      <Route path='/' element={<MainPage />} />
                      <Route path='/uslugi/:service' element={<ServicePage />} />
                      <Route path='/uslugi' element={<Navigate to='/' />} />
                      <Route path='/otzyvy' element={<OtzyvyPage />} />
                      <Route path='/kontakt' element={<ContactPage />} />
                      <Route path='*' element={<ErrorPage />} />
                    </Routes>
                  </Scroll>
                </main>

              </div>
              <FooterComp />
            </div>

          </BrowserRouter>
        </StyleProvider>
      </Context.Provider>
    </ConfigProvider>
  );
}

export default App
