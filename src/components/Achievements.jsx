import { motion } from 'framer-motion'
import { FiAward, FiTrendingUp, FiCode, FiUsers } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

export default function Achievements() {
  const { t } = useTranslation()

  const achievements = [
    {
      icon: FiAward,
      number: '29th / 450+',
      titleKey: 'achievements.achievement1Title',
      descKey: 'achievements.achievement1Desc'
    },
    {
      icon: FiTrendingUp,
      number: 'Top 25',
      titleKey: 'achievements.achievement2Title',
      descKey: 'achievements.achievement2Desc'
    },
    {
      icon: FiCode,
      number: '1,300+',
      titleKey: 'achievements.achievement3Title',
      descKey: 'achievements.achievement3Desc'
    },
    {
      icon: FiUsers,
      number: 'Mentor',
      titleKey: 'achievements.achievement4Title',
      descKey: 'achievements.achievement4Desc'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="achievements" className="section relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">{t('achievements.title')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, idx) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass p-8 rounded-xl text-center group cursor-pointer glass-hover"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-4 flex justify-center"
                >
                  <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-lg group-hover:from-cyan-500/40 group-hover:to-teal-500/40 transition-colors">
                    <IconComponent size={32} className="text-cyan-400" />
                  </div>
                </motion.div>

                <motion.h3
                  className="text-2xl font-bold text-cyan-400 mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {achievement.number}
                </motion.h3>

                <h4 className="text-xl font-bold mb-2">
                  {t(achievement.titleKey)}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {t(achievement.descKey)}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          variants={itemVariants}
          className="mt-20 glass p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-8 text-cyan-400">{t('achievements.title')}</h3>
          <div className="space-y-6">
            {[
              {
                dateKey: 'achievements.timeline1Date',
                titleKey: 'achievements.timeline1Title',
                descKey: 'achievements.timeline1Desc'
              },
              {
                dateKey: 'achievements.timeline2Date',
                titleKey: 'achievements.timeline2Title',
                descKey: 'achievements.timeline2Desc'
              },
              {
                dateKey: 'achievements.timeline3Date',
                titleKey: 'achievements.timeline3Title',
                descKey: 'achievements.timeline3Desc'
              },
              {
                dateKey: 'achievements.timeline4Date',
                titleKey: 'achievements.timeline4Title',
                descKey: 'achievements.timeline4Desc'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-6 pb-6 border-b border-slate-700 last:border-b-0"
              >
                <div className="relative flex flex-col items-center">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full relative z-10" />
                  {idx < 2 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-cyan-400 to-transparent mt-2" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-cyan-400 text-sm font-semibold">{t(item.dateKey)}</p>
                  <h4 className="text-lg font-bold mt-1">{t(item.titleKey)}</h4>
                  <p className="text-gray-400 mt-2">{t(item.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
