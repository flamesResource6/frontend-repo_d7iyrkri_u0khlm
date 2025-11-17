import React, { createContext, useContext, useEffect, useState } from 'react'
import { messages, locales } from './i18n'

const LocaleContext = createContext({ locale: 'en', setLocale: () => {}, t: messages.en })

export function LocaleProvider({ children }){
  const [locale, setLocale] = useState('en')

  useEffect(()=>{
    const saved = localStorage.getItem('locale')
    if(saved && locales.includes(saved)) setLocale(saved)
  },[])

  useEffect(()=>{
    localStorage.setItem('locale', locale)
    document.documentElement.lang = locale
  },[locale])

  const t = messages[locale] || messages.en
  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale(){
  return useContext(LocaleContext)
}
