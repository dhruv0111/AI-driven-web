import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { UseCaseProvider } from './contexts/UseCaseContext';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import UseCases from './sections/UseCases';
import Features from './sections/Features';
import Dashboard from './sections/Dashboard';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <UseCaseProvider>
        <Navbar />
        <main>
          <Hero />
          <UseCases />
          <Features />
          <Dashboard />
          <Testimonials />
          <Contact />
        </main>
        <footer className="bg-gray-100 dark:bg-gray-900 py-12 mt-20">
          <div className="container text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} NovaAI. All rights reserved.
            </p>
          </div>
        </footer>
      </UseCaseProvider>
    </ThemeProvider>
  );
}

export default App;