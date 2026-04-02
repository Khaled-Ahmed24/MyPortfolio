import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">{t('about.title')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 z-10" />
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop"
                alt="About"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-lg opacity-20 blur-lg" />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t('about.heading1')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('about.text1')}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">{t('about.heading2')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('about.text2')}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">{t('about.heading3')}</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                  {t('about.item1')}
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                  {t('about.item2')}
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                  {t('about.item3')}
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                  {t('about.item4')}
                </li>
              </ul>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary inline-block"
            >
              {t('about.cta')}
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
