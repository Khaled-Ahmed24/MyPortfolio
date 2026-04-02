import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function Skills() {
  const [selectedProof, setSelectedProof] = useState(null)
  const { t } = useTranslation()

  const technicalSkills = [
    {
      categoryKey: 'skills.tech_backend',
      itemKeys: ['skills.tech_backend_item1', 'skills.tech_backend_item2', 'skills.tech_backend_item3', 'skills.tech_backend_item4', 'skills.tech_backend_item5', 'skills.tech_backend_item6', 'skills.tech_backend_item7', 'skills.tech_backend_item8']
    },
    {
      categoryKey: 'skills.tech_database',
      itemKeys: ['skills.tech_database_item1', 'skills.tech_database_item2', 'skills.tech_database_item3', 'skills.tech_database_item4', 'skills.tech_database_item5', 'skills.tech_database_item6']
    },
    {
      categoryKey: 'skills.tech_architecture',
      itemKeys: ['skills.tech_architecture_item1', 'skills.tech_architecture_item2', 'skills.tech_architecture_item3', 'skills.tech_architecture_item4', 'skills.tech_architecture_item5']
    },
    {
      categoryKey: 'skills.tech_workflow',
      itemKeys: ['skills.tech_workflow_item1', 'skills.tech_workflow_item2', 'skills.tech_workflow_item3', 'skills.tech_workflow_item4', 'skills.tech_workflow_item5', 'skills.tech_workflow_item6']
    }
  ]

  const otherSkills = [
    {
      categoryKey: 'skills.other_communication',
      itemKeys: ['skills.other_communication_item1', 'skills.other_communication_item2', 'skills.other_communication_item3', 'skills.other_communication_item4']
    },
    {
      categoryKey: 'skills.other_delivery',
      itemKeys: ['skills.other_delivery_item1', 'skills.other_delivery_item2', 'skills.other_delivery_item3', 'skills.other_delivery_item4']
    },
    {
      categoryKey: 'skills.other_documentation',
      itemKeys: ['skills.other_documentation_item1', 'skills.other_documentation_item2', 'skills.other_documentation_item3', 'skills.other_documentation_item4']
    },
    {
      categoryKey: 'skills.other_professional',
      itemKeys: ['skills.other_professional_item1', 'skills.other_professional_item2', 'skills.other_professional_item3', 'skills.other_professional_item4']
    }
  ]

  const proofGallery = [
    {
      id: 'presentations',
      titleKey: 'gallery.presentations',
      descKey: 'gallery.presentationsDesc',
      color: 'from-purple-500/80 to-violet-500/80',
      images: [
        '/images/Presentation/1.png',
        '/images/Presentation/2.png',
        '/images/Presentation/3.png',
        '/images/Presentation/4.png',
        '/images/Presentation/5.png',
        '/images/Presentation/6.png',
        '/images/Presentation/7.png',
        '/images/Presentation/8.png'
      ]
    },
    {
      id: 'database',
      titleKey: 'gallery.database',
      descKey: 'gallery.databaseDesc',
      color: 'from-blue-500/80 to-cyan-500/80',
      images: [
        '/images/Database/1.png',
        '/images/Database/2.png',
        '/images/Database/3.png',
        '/images/Database/Job%20Portal%20ERD.png',
        '/images/Database/Team%20space%20ERD.jpg'
      ]
    },
    {
      id: 'portfolio',
      titleKey: 'gallery.portfolio',
      descKey: 'gallery.portfolioDesc',
      color: 'from-sky-500/80 to-blue-500/80',
      images: [
        '/images/Portfolio/Website/1.png',
        '/images/Portfolio/Website/2.png',
        '/images/Portfolio/Website/3.png',
        '/images/Portfolio/PDF/Screenshot%202025-10-17%20144255.png',
        '/images/Portfolio/PDF/Screenshot%202025-10-17%20144309.png'
      ]
    },
    {
      id: 'word',
      titleKey: 'gallery.wordDocs',
      descKey: 'gallery.wordDocsDesc',
      color: 'from-indigo-500/80 to-purple-500/80',
      images: [
        '/images/Word/1.jpg',
        '/images/Word/2.jpg',
        '/images/Word/3.jpg',
        '/images/Word/4.jpg',
        '/images/Word/5.jpg'
      ]
    },
    {
      id: 'landing',
      titleKey: 'gallery.landingPages',
      descKey: 'gallery.landingPagesDesc',
      color: 'from-emerald-500/80 to-teal-500/80',
      images: [
        '/images/Landing%20Page/1.png',
        '/images/Landing%20Page/2.png',
        '/images/Landing%20Page/3.png',
        '/images/Landing%20Page/4.png'
      ]
    },
    {
      id: 'cv',
      titleKey: 'gallery.documentation',
      descKey: 'gallery.documentationDesc',
      color: 'from-rose-500/80 to-pink-500/80',
      images: [
        '/images/CV/1.jpg',
        '/images/CV/2.png',
        '/images/CV/3.png',
        '/images/CV/4.jpg',
        '/images/CV/5.jpg'
      ]
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="skills" className="section relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">{t('skills.title')}</h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            {t('skills.description')}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div variants={itemVariants} className="glass p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-2 text-cyan-400">{t('skills.technical')}</h3>
            <p className="text-slate-400 mb-6 text-sm">{t('skills.technicalDesc')}</p>
            <div className="space-y-6">
              {technicalSkills.map((skillGroup) => (
                <div key={skillGroup.categoryKey}>
                  <h4 className="text-lg font-semibold text-white mb-3">{t(skillGroup.categoryKey)}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.itemKeys.map((itemKey) => (
                      <span
                        key={itemKey}
                        className="px-3 py-1.5 rounded-full text-sm bg-slate-800/80 border border-cyan-500/30 text-slate-200"
                      >
                        {t(itemKey)}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-2 text-teal-300">{t('skills.nontechnical')}</h3>
            <p className="text-slate-400 mb-6 text-sm">{t('skills.nontechnicalDesc')}</p>
            <div className="space-y-6">
              {otherSkills.map((skillGroup) => (
                <div key={skillGroup.categoryKey}>
                  <h4 className="text-lg font-semibold text-white mb-3">{t(skillGroup.categoryKey)}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.itemKeys.map((itemKey) => (
                      <span
                        key={itemKey}
                        className="px-3 py-1.5 rounded-full text-sm bg-slate-800/80 border border-teal-500/30 text-slate-200"
                      >
                        {t(itemKey)}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-sky-300">{t('gallery.title')}</h3>
            <p className="text-slate-300 mt-2">{t('gallery.subtitle')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {proofGallery.map((gallery) => (
              <motion.div
                key={gallery.id}
                variants={itemVariants}
                className="group glass rounded-2xl overflow-hidden cursor-pointer glass-hover"
                onClick={() => setSelectedProof(gallery)}
                whileHover={{ y: -4 }}
              >
                <div className="relative overflow-hidden bg-slate-900 aspect-video">
                  <img
                    src={gallery.images[0]}
                    alt={t(gallery.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  <span className={`absolute top-4 left-4 md:left-auto md:right-4 text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${gallery.color} text-slate-950`}>
                    {gallery.images.length} {t('gallery.samples')}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <h4 className="text-xl font-bold text-white">{t(gallery.titleKey)}</h4>
                    <p className="text-slate-400 text-sm mt-1">{t(gallery.descKey)}</p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="btn btn-secondary w-full text-sm py-2"
                  >
                    {t('gallery.viewDetails')}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>



      </motion.div>

      <AnimatePresence>
        {selectedProof && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProof(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-w-5xl w-full max-h-[86vh] overflow-y-auto rounded-2xl"
            >
              <div className="p-6 md:p-8 border-b border-slate-700/70">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-slate-400 text-sm">Gallery Preview</p>
                    <h3 className="text-3xl font-bold text-sky-300 mt-1">{t(selectedProof.titleKey)}</h3>
                    <p className="text-slate-300 mt-2">{t(selectedProof.descKey)}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProof(null)}
                    className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-600 text-slate-300 hover:text-white hover:border-sky-400 transition-colors flex items-center justify-center"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="p-6 md:p-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedProof.images.map((src, idx) => (
                  <a
                    key={src}
                    href={src}
                    target="_blank"
                    rel="noreferrer"
                    className="group block rounded-xl overflow-hidden border border-slate-700/80 hover:border-sky-400/70 transition-colors"
                  >
                    <img
                      src={src}
                      alt={`${t(selectedProof.titleKey)} sample ${idx + 1}`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
