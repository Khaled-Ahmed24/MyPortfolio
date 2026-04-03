import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950/70 border-t border-sky-500/15 py-10 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 glass p-6 rounded-2xl">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Khaled Ahmed
              </span>
            </h3>
            <p className="text-slate-300">{t('footer.role')}</p>
          </div>

          <div className="text-center text-slate-300">
            <p>© {currentYear} Khaled Ahmed Kamal. {t('footer.copyright')}</p>
            <p className="text-sm mt-2 text-slate-400">{t('footer.tagline')}</p>
          </div>

          <div className="flex gap-4">
            <motion.a
              href="https://github.com/Khaled-Ahmed24"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-slate-300 hover:text-sky-300 transition-colors"
            >
              {t('footer.github')}
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/khaled24ahmed"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-slate-300 hover:text-sky-300 transition-colors"
            >
              {t('footer.linkedin')}
            </motion.a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
