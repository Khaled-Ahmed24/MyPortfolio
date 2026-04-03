import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

export default function Hero() {
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
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  const scrollVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity
      }
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container z-10"
      >
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 items-center">
          <div className="flex flex-col text-center lg:text-left items-center lg:items-start space-y-7">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/35 bg-slate-900/50 text-sky-300 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-sky-300 animate-pulse" />
              {t('hero.badge')}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 max-w-3xl">
              <p className="text-sky-300/90 text-sm md:text-base font-semibold tracking-[0.22em] uppercase">
                {t('hero.tagline')}
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                {t('hero.headline')}
              </h1>
              <p className="text-xl md:text-2xl text-slate-200">
                {t('hero.subtitle')}
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-lg text-slate-300 leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 pt-2">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                {t('hero.cta1')}
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary"
              >
                {t('hero.cta2')}
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl pt-2">
              {[
                { labelKey: 'hero.stat1', valueKey: 'hero.stat1value' },
                { labelKey: 'hero.stat2', valueKey: 'hero.stat2value' },
                { labelKey: 'hero.stat3', valueKey: 'hero.stat3value' }
              ].map((stat) => (
                <div key={stat.labelKey} className="glass p-4 rounded-xl text-center lg:text-left">
                  <p className="text-2xl font-bold text-sky-300">{t(stat.valueKey)}</p>
                  <p className="text-sm text-slate-300">{t(stat.labelKey)}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-sky-500/30 via-blue-500/20 to-amber-400/20 rounded-3xl blur-2xl"
              />
              <div className="relative glass rounded-3xl p-5">
                <div className="relative rounded-2xl overflow-hidden border border-sky-400/30">
                  <img
                    src="/MyPortfolio/images/Profile Picture.jpg"
                    alt="Profile"
                    className="w-full h-[430px] object-cover"
                  />
                </div>


              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="pt-12"
        >
          <motion.div
            variants={scrollVariants}
            animate="animate"
            className="flex justify-center"
          >
            <FiArrowDown size={32} className="text-sky-300 animate-glow" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
