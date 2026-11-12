import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [toast, setToast] = useState({ show: false, message: '' });

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 3200);
  };

  const copyToClipboard = (text, label) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text)
        .then(() => showToast(`${label} copied to clipboard!`))
        .catch(() => fallbackCopy(text, label));
    } else {
      fallbackCopy(text, label);
    }
  };

  const fallbackCopy = (text, label) => {
    try {
      const tempInput = document.createElement('input');
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      showToast(`${label} copied to clipboard!`);
    } catch {
      showToast(`Failed to copy ${label}`);
    }
  };

  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero onCopy={copyToClipboard} />
        <Education />
        <Projects />
        <Skills />
        <Achievements />
        <Contact onCopy={copyToClipboard} showToast={showToast} />
      </main>
      <Footer />
      <Toast toast={toast} />
    </div>
  );
}

