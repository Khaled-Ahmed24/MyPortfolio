import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

export default function Projects() {
  const { t } = useTranslation()
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const projects = [
    {
      id: 1,
      titleKey: 'projects.project1.title',
      descriptionKey: 'projects.project1.description',
      categoryKey: 'projects.project1.category',
      roleKey: 'projects.project1.role',
      timelineKey: 'projects.project1.timeline',
      problemKey: 'projects.project1.problem',
      solutionKey: 'projects.project1.solution',
      featuresKeys: ['projects.project1.feature1', 'projects.project1.feature2', 'projects.project1.feature3', 'projects.project1.feature4', 'projects.project1.feature5'],
      tech: ['C#', '.NET Core', 'EF Core', 'SQL Server', 'JWT'],
      github: 'https://github.com/Khaled-Ahmed24/Teamspace',
      liveDemo: 'https://drive.google.com/file/d/1ARKvkOixVPmIhTNwIhsRd9zJlToVUt7L/view',
      image: '/MyPortfolio/images/Team Space/Main.png',
      images: [
        '/MyPortfolio/images/Team Space/Main.png',
        '/MyPortfolio/images/Team Space/Screenshot 2025-08-16 042303.png',
        '/MyPortfolio/images/Team Space/Screenshot 2025-08-16 042320.png',
        '/MyPortfolio/images/Team Space/Screenshot 2025-08-16 042335.png',
        '/MyPortfolio/images/Team Space/Screenshot 2025-08-16 042359.png',
        '/MyPortfolio/images/Team Space/Screenshot 2025-08-16 042528.png',
        '/MyPortfolio/images/Team Space/Screenshot 2025-08-16 042547.png',
        '/MyPortfolio/images/Team Space/Screenshot 2025-08-16 042615.png',
        '/MyPortfolio/images/Team Space/Screenshot 2025-08-16 042634.png',
        '/MyPortfolio/images/Team Space/Screenshot 2025-08-23 193720.png',
        '/MyPortfolio/images/Team Space/Screenshot 2025-08-23 193747.png',
        '/MyPortfolio/images/Team Space/Screenshot 2025-08-23 194234.png',
        '/MyPortfolio/images/Team Space/Screenshot 2025-08-23 194255.png',
        '/MyPortfolio/images/Team Space/Screenshot 2025-08-23 194348.png',
        '/MyPortfolio/images/Team Space/Screenshot 2025-08-23 194436.png',
        '/MyPortfolio/images/Team Space/Screenshot 2025-08-23 194501.png',
        '/MyPortfolio/images/Team Space/Screenshot 2025-08-23 194858.png',
        '/MyPortfolio/images/Team Space/Screenshot 2025-08-23 195313.png'
      ]
    },
    {
      id: 2,
      titleKey: 'projects.project2.title',
      descriptionKey: 'projects.project2.description',
      categoryKey: 'projects.project2.category',
      roleKey: 'projects.project2.role',
      timelineKey: 'projects.project2.timeline',
      problemKey: 'projects.project2.problem',
      solutionKey: 'projects.project2.solution',
      featuresKeys: ['projects.project2.feature1', 'projects.project2.feature2', 'projects.project2.feature3', 'projects.project2.feature4', 'projects.project2.feature5'],
      tech: ['C#', '.NET', 'ASP.NET', 'SQL Server'],
      github: 'https://github.com/Khaled-Ahmed24/Job-Portal',
      liveDemo: 'https://drive.google.com/file/d/1uEebGHB2QjpeIREI7JQLceiL_BQug-29/view',
      image: '/MyPortfolio/images/Job Hup/Main.png',
      images: [
        '/MyPortfolio/images/Job Hup/Main.png',
        '/MyPortfolio/images/Job Hup/Screenshot 2025-08-13 012747.png',
        '/MyPortfolio/images/Job Hup/Screenshot 2025-08-13 012926.png',
        '/MyPortfolio/images/Job Hup/Screenshot 2025-08-13 013057.png',
        '/MyPortfolio/images/Job Hup/Screenshot 2025-08-13 013718.png'
      ]
    },
    {
      id: 3,
      titleKey: 'projects.project3.title',
      descriptionKey: 'projects.project3.description',
      categoryKey: 'projects.project3.category',
      roleKey: 'projects.project3.role',
      timelineKey: 'projects.project3.timeline',
      problemKey: 'projects.project3.problem',
      solutionKey: 'projects.project3.solution',
      featuresKeys: ['projects.project3.feature1', 'projects.project3.feature2', 'projects.project3.feature3', 'projects.project3.feature4', 'projects.project3.feature5'],
      tech: ['C#', '.NET', 'SQL Server', 'Real-time Processing'],
      github: 'https://github.com/Khaled-Ahmed24/Online_Exam',
      liveDemo: 'https://github.com/Khaled-Ahmed24/Online_Exam',
      image: '/MyPortfolio/images/Examy/Main.png',
      images: [
        '/MyPortfolio/images/Examy/Main.png',
        '/MyPortfolio/images/Examy/Screenshot 2025-08-13 014552.png',
        '/MyPortfolio/images/Examy/Screenshot 2025-08-13 014742.png',
        '/MyPortfolio/images/Examy/Screenshot 2025-08-13 014803.png',
        '/MyPortfolio/images/Examy/Screenshot 2025-08-13 015140.png',
        '/MyPortfolio/images/Examy/Screenshot 2025-08-13 015156.png',
        '/MyPortfolio/images/Examy/Screenshot 2025-08-13 015212.png',
        '/MyPortfolio/images/Examy/Screenshot 2025-08-13 015249.png'
      ]
    }
  ]

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
      transition: { duration: 0.6 }
    }
  }

  const selectedProjectImages = selectedProject?.images ?? (selectedProject ? [selectedProject.image] : [])

  const showPrevImage = () => {
    if (selectedProjectImages.length === 0) return
    setActiveImageIndex((prev) => (prev - 1 + selectedProjectImages.length) % selectedProjectImages.length)
  }

  const showNextImage = () => {
    if (selectedProjectImages.length === 0) return
    setActiveImageIndex((prev) => (prev + 1) % selectedProjectImages.length)
  }

  return (
    <section id="projects" className="section relative overflow-hidden">
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">{t('projects.title')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group glass rounded-xl overflow-hidden cursor-pointer glass-hover"
              onClick={() => {
                setSelectedProject(project)
                setActiveImageIndex(0)
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-slate-800 aspect-video">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-sky-400 text-sm font-semibold">{t(project.categoryKey)}</span>
                  <h3 className="text-2xl font-bold mt-2">{t(project.titleKey)}</h3>
                </div>

                <p className="text-gray-300 text-sm line-clamp-2">
                  {t(project.descriptionKey)}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs bg-slate-800 px-3 py-1 rounded-full text-sky-400">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs bg-slate-800 px-3 py-1 rounded-full text-gray-400">
                      +{project.tech.length - 3} {t('projects.more')}
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-secondary w-full justify-center"
                >
                  {t('projects.viewDetails')}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setSelectedProject(null)
              setActiveImageIndex(0)
            }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-w-6xl w-full max-h-[86vh] overflow-y-auto rounded-2xl"
            >
              <div className="relative">
                <img
                  src={selectedProjectImages[activeImageIndex] ?? selectedProject.image}
                  alt={t(selectedProject.titleKey)}
                  className="w-full h-96 object-cover"
                />
                {selectedProjectImages.length > 1 && (
                  <>
                    <button
                      onClick={showPrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-950/85 rounded-full flex items-center justify-center hover:bg-slate-950 transition-colors"
                      aria-label="Previous image"
                    >
                      <FiChevronLeft size={20} />
                    </button>
                    <button
                      onClick={showNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-950/85 rounded-full flex items-center justify-center hover:bg-slate-950 transition-colors"
                      aria-label="Next image"
                    >
                      <FiChevronRight size={20} />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-slate-950/80 text-slate-200">
                      {activeImageIndex + 1} / {selectedProjectImages.length}
                    </div>
                  </>
                )}
                <button
                  onClick={() => {
                    setSelectedProject(null)
                    setActiveImageIndex(0)
                  }}
                  className="absolute top-4 right-4 w-10 h-10 bg-slate-950/80 rounded-full flex items-center justify-center hover:bg-slate-950 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <span className="text-sky-400 text-sm font-semibold">{t(selectedProject.categoryKey)}</span>
                  <h2 className="text-3xl font-bold mt-2">{t(selectedProject.titleKey)}</h2>
                  <p className="text-gray-400 mt-2 text-lg">{t(selectedProject.roleKey)}</p>
                  <p className="text-gray-500 mt-1 text-sm">{t(selectedProject.timelineKey)}</p>
                </div>

                <p className="text-gray-300 leading-relaxed">{t(selectedProject.descriptionKey)}</p>

                <div>
                  <h4 className="font-bold text-lg mb-3">{t('projects.screenshots')}</h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {selectedProjectImages.map((src, idx) => (
                      <button
                        key={`${src}-${idx}`}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={`group block rounded-xl overflow-hidden border transition-colors ${
                          idx === activeImageIndex ? 'border-sky-400/90' : 'border-slate-700/80 hover:border-sky-400/70'
                        }`}
                      >
                        <img
                          src={src}
                          alt={`${t(selectedProject.titleKey)} screenshot ${idx + 1}`}
                          className={`w-full h-44 object-cover transition-transform duration-300 ${
                            idx === activeImageIndex ? 'scale-[1.02]' : 'group-hover:scale-105'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass p-6 rounded-xl">
                    <h4 className="font-bold text-lg text-sky-400 mb-3">{t('projects.problem')}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{t(selectedProject.problemKey)}</p>
                  </div>
                  <div className="glass p-6 rounded-xl">
                    <h4 className="font-bold text-lg text-sky-400 mb-3">{t('projects.solution')}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{t(selectedProject.solutionKey)}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-3">{t('projects.keyFeatures')}</h4>
                  <ul className="space-y-2">
                    {selectedProject.featuresKeys.map((featureKey) => (
                      <li key={featureKey} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-3">{t('projects.technologiesUsed')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="bg-slate-800 px-4 py-2 rounded-lg text-sky-400 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <motion.a
                    href={selectedProject.github}
                    whileHover={{ scale: 1.05 }}
                    className="btn btn-primary flex items-center gap-2"
                  >
                    <FiGithub /> {t('projects.github')}
                  </motion.a>
                  <motion.a
                    href={selectedProject.liveDemo}
                    whileHover={{ scale: 1.05 }}
                    className="btn btn-secondary flex items-center gap-2"
                  >
                    <FiExternalLink /> {t('projects.liveDemo')}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
