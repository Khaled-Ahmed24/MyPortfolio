import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

export default function Projects() {
  const { t } = useTranslation()
  const [selectedProject, setSelectedProject] = useState(null)

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
      github: 'https://github.com/KhaledAhmedKamal/TeamSpace',
      image: '/images/Team%20Space%20Website/Screenshot%202025-08-23%20195313.png'
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
      github: 'https://github.com/KhaledAhmedKamal/JobPortal',
      image: '/images/Job%20Hub%20Website/Screenshot%202025-08-13%20013718.png'
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
      github: 'https://github.com/KhaledAhmedKamal/Examy',
      image: '/images/Examy%20Website/Screenshot%202025-08-13%20015249.png'
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
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto" />
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
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-slate-800 aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-cyan-400 text-sm font-semibold">{t(project.categoryKey)}</span>
                  <h3 className="text-2xl font-bold mt-2">{t(project.titleKey)}</h3>
                </div>

                <p className="text-gray-300 text-sm line-clamp-2">
                  {t(project.descriptionKey)}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs bg-slate-800 px-3 py-1 rounded-full text-cyan-400">
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
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-2xl"
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-slate-950/80 rounded-full flex items-center justify-center hover:bg-slate-950 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <span className="text-cyan-400 text-sm font-semibold">{t(selectedProject.categoryKey)}</span>
                  <h2 className="text-3xl font-bold mt-2">{t(selectedProject.titleKey)}</h2>
                  <p className="text-gray-400 mt-2 text-lg">{t(selectedProject.roleKey)}</p>
                  <p className="text-gray-500 mt-1 text-sm">{t(selectedProject.timelineKey)}</p>
                </div>

                <p className="text-gray-300 leading-relaxed">{t(selectedProject.descriptionKey)}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass p-6 rounded-xl">
                    <h4 className="font-bold text-lg text-cyan-400 mb-3">{t('projects.problem')}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{t(selectedProject.problemKey)}</p>
                  </div>
                  <div className="glass p-6 rounded-xl">
                    <h4 className="font-bold text-lg text-cyan-400 mb-3">{t('projects.solution')}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{t(selectedProject.solutionKey)}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-3">{t('projects.keyFeatures')}</h4>
                  <ul className="space-y-2">
                    {selectedProject.featuresKeys.map((featureKey) => (
                      <li key={featureKey} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-3">{t('projects.technologiesUsed')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="bg-slate-800 px-4 py-2 rounded-lg text-cyan-400 font-medium">
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
                    href={selectedProject.github}
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
