import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Pricing from './components/Pricing'
import ContactFooter from './components/ContactFooter'
import ActionModal from './components/ActionModal'

function App() {
  const location = useLocation()
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    mode: 'signup',
    selectedPlan: 'Starter'
  })

  // Sync URL paths (/features, /about, /pricing, /contact) with section scrolling
  useEffect(() => {
    const pathMap = {
      '/': 'home',
      '/features': 'features',
      '/about': 'about',
      '/pricing': 'pricing',
      '/contact': 'contact'
    }

    const targetId = pathMap[location.pathname]
    if (targetId) {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location.pathname])

  const openModal = (mode = 'signup', plan = 'Starter') => {
    setModalConfig({ isOpen: true, mode, selectedPlan: plan })
  }

  const closeModal = () => {
    setModalConfig((prev) => ({ ...prev, isOpen: false }))
  }

  return (
    <div className="app-wrapper">
      <Navbar onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <Features />
        <About />
        <Pricing onOpenModal={openModal} />
      </main>
      <ContactFooter />
      <ActionModal
        isOpen={modalConfig.isOpen}
        mode={modalConfig.mode}
        selectedPlan={modalConfig.selectedPlan}
        onClose={closeModal}
      />
    </div>
  )
}

export default App