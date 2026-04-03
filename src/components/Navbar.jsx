import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

export default function Navbar({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('language', lng)
    document.documentElement.lang = lng
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr'
  }

  const navLinks = [
    { key: 'home', href: '#hero' },
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' },
    { key: 'achievements', href: '#achievements' },
    { key: 'contact', href: '#contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-xl bg-slate-950/70 border-b border-sky-500/20 shadow-[0_8px_30px_rgba(2,8,23,0.45)]' : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold"
        >
          <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Khaled Ahmed
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-2 bg-slate-900/45 border border-slate-700/60 rounded-full px-2 py-2">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.key}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="text-slate-300 hover:text-sky-300 hover:bg-slate-800/80 transition-all duration-200 font-medium px-4 py-2 rounded-full"
            >
              {t(`nav.${link.key}`)}
            </motion.a>
          ))}

          <div
            className={`px-2 flex gap-1 border-slate-600/60 ${
              i18n.language === 'ar' ? 'border-r' : 'border-l'
            }`}
          >
            <motion.button
              onClick={() => changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}
              whileHover={{ scale: 1.08 }}
              className="px-4 py-1.5 rounded-full font-medium transition-colors bg-sky-500/30 text-sky-300 border border-sky-400/60 hover:bg-sky-500/40"
            >
              {i18n.language === 'en' ? 'AR' : 'EN'}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white z-50 p-2 rounded-lg border border-slate-600/60 bg-slate-900/60"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden backdrop-blur-xl bg-slate-950/85 border-t border-sky-500/20"
        >
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-gray-300 hover:text-sky-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
            <button
              onClick={() => {
                changeLanguage(i18n.language === 'en' ? 'ar' : 'en')
                setIsOpen(false)
              }}
              className="w-full py-2 rounded-lg font-medium transition-colors bg-sky-500/30 text-sky-300 border border-sky-400/60 hover:bg-sky-500/40 mt-4 border-t border-slate-600/60 pt-4"
            >
              {i18n.language === 'en' ? 'العربية' : 'English'}
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
