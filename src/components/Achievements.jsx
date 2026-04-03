import { motion } from 'framer-motion'
import { FiAward, FiTrendingUp, FiCode, FiUsers, FiExternalLink } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

export default function Achievements() {
  const { t } = useTranslation()

  const achievements = [
    {
      icon: FiAward,
      number: '29th / 450+',
      titleKey: 'achievements.achievement1Title',
      descKey: 'achievements.achievement1Desc',
      proofLink: 'https://icpc.global/ICPCID/DRPKH7FDT8KN'
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

  const timelineItems = [
    {
      dateKey: 'achievements.timeline1Date',
      titleKey: 'achievements.timeline1Title',
      descKey: 'achievements.timeline1Desc',
      extraLink: 'https://www.facebook.com/icpcassiutt'
    },
    {
      dateKey: 'achievements.timeline2Date',
      titleKey: 'achievements.timeline2Title',
      descKey: 'achievements.timeline2Desc',
      proofLink: 'https://drive.google.com/drive/u/0/folders/1-mxWT5QyCc498wY474pM4NjZvk_oGnpT'
    },
    {
      dateKey: 'achievements.timeline3Date',
      titleKey: 'achievements.timeline3Title',
      descKey: 'achievements.timeline3Desc',
      proofLink: 'https://drive.google.com/drive/u/0/folders/1ivcClVqBZlruvZa0pO47Eb5nwxmOxH4w'
    },
    {
      dateKey: 'achievements.timeline4Date',
      titleKey: 'achievements.timeline4Title',
      descKey: 'achievements.timeline4Desc',
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
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 mx-auto" />
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
                  <div className="p-4 bg-gradient-to-r from-sky-500/20 to-emerald-500/20 rounded-lg group-hover:from-sky-500/40 group-hover:to-emerald-500/40 transition-colors">
                    <IconComponent size={32} className="text-sky-400" />
                  </div>
                </motion.div>

                <motion.h3
                  className="text-2xl font-bold text-sky-400 mb-2"
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

                {achievement.proofLink && (
                  <motion.a
                    href={achievement.proofLink}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn btn-secondary text-sm px-4 py-2 inline-flex items-center gap-2 mt-4"
                  >
                    <FiExternalLink />
                    {t('achievements.viewCertificate')}
                  </motion.a>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          variants={itemVariants}
          className="mt-20 glass p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-8 text-sky-400">{t('achievements.title')}</h3>
          <div className="space-y-6">
            {timelineItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-6 pb-6 border-b border-slate-700 last:border-b-0"
              >
                <div className="relative flex flex-col items-center">
                  <div className="w-4 h-4 bg-sky-400 rounded-full relative z-10" />
                  {idx < 2 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-sky-400 to-transparent mt-2" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sky-400 text-sm font-semibold">{t(item.dateKey)}</p>
                  <h4 className="text-lg font-bold mt-1">{t(item.titleKey)}</h4>
                  <p className="text-gray-400 mt-2">{t(item.descKey)}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.proofLink &&(
                      <motion.a
                      href={item.proofLink}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="btn btn-secondary text-sm px-4 py-2 inline-flex items-center gap-2"
                    >
                      <FiExternalLink />
                      {t('achievements.viewCertificate')}
                    </motion.a>
                    )}
                    {item.extraLink && (
                      <motion.a
                        href={item.extraLink}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="btn btn-secondary text-sm px-4 py-2 inline-flex items-center gap-2"
                      >
                        <FiExternalLink />
                        {t('achievements.communityPage')}
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}
