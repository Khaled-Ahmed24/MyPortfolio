import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()

  const contactInfo = [
    {
      icon: FiMail,
      labelKey: 'contact.email',
      value: 'khaled.ahmed333774@gmail.com',
      href: 'mailto:khaled.ahmed333774@gmail.com'
    },
    {
      icon: FiPhone,
      labelKey: 'contact.phone',
      value: '+201113936399',
      href: 'tel:+201113936399'
    },
    {
      icon: FiMapPin,
      labelKey: 'contact.location',
      value: 'Egypt',
      href: 'https://maps.google.com/?q=Egypt'
    }
  ]

  const socialLinks = [
    {
      icon: FiGithub,
      labelKey: 'contact.github',
      href: 'https://github.com/KhaledAhmedKamal',
      color: 'hover:text-gray-300'
    },
    {
      icon: FiLinkedin,
      labelKey: 'contact.linkedin',
      href: 'https://linkedin.com/in/khaled24ahmed',
      color: 'hover:text-blue-400'
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
    <section id="contact" className="section relative overflow-hidden">
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">{t('contact.title')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Call to Action */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">{t('contact.heading')}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('contact.description')}
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, idx) => {
                const IconComponent = info.icon
                return (
                  <motion.a
                    key={idx}
                    href={info.href}
                    variants={itemVariants}
                    className="glass p-4 rounded-lg flex items-center gap-4 group glass-hover"
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-lg group-hover:from-cyan-500/40 group-hover:to-teal-500/40 transition-colors">
                      <IconComponent size={24} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{t(info.labelKey)}</p>
                      <p className="font-semibold text-white">{info.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Right Side - CTA Form */}
          <motion.div
            variants={itemVariants}
            className="glass p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-2">{t('contact.formTitle')}</h3>
            <p className="text-gray-400 mb-6 text-sm">
              {t('contact.formDesc')}
            </p>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.name')}</label>
                <input
                  type="text"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.email')}</label>
                <input
                  type="email"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.message')}</label>
                <textarea
                  rows="5"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn btn-primary w-full"
              >
                {t('contact.send')}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="text-center pt-8 border-t border-slate-700"
        >
          <p className="text-gray-400 mb-6">{t('contact.connect')}</p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => {
              const IconComponent = link.icon
              return (
                <motion.a
                  key={link.labelKey}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full text-cyan-400 ${link.color} transition-colors`}
                  aria-label={t(link.labelKey)}
                >
                  <IconComponent size={28} />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
