import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ChapterSection from './components/ChapterSection';
import ChapterNavigation from './components/ChapterNavigation';
import ThemeToggle from './components/ThemeToggle';
import { chapters } from './data/chapters';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">      
      <Header />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <ChapterNavigation chapters={chapters} />
        
        {/* Desktop/Tablet Welcome Card */}
        <div className="hidden sm:block mb-6 sm:mb-8 bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-full overflow-hidden shrink-0 border-4 border-indigo-200 dark:border-indigo-900/50">
              <img 
                src="https://i.postimg.cc/nL7ShnyH/43-AA9-D4-C-67-B4-4-EC0-827-D-7-FF2-BC7-B2751-plus.webp" 
                alt="Ashish Gupta Sir"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="text-center sm:text-left">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-indigo-700 dark:text-indigo-300">
                Welcome to Ashish Gupta Sir's Physics Lectures
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">
                Access all Physics lecture videos for NEET UG preparation. 
                Click on any topic below to start learning.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Welcome Card */}
        <div className="sm:hidden mb-4 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-md border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border-2 border-indigo-200 dark:border-indigo-900/50">
              <img 
                src="https://i.postimg.cc/nL7ShnyH/43-AA9-D4-C-67-B4-4-EC0-827-D-7-FF2-BC7-B2751-plus.webp" 
                alt="Ashish Gupta Sir"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <h2 className="text-sm font-bold text-indigo-700 dark:text-indigo-300 truncate">
                Physics Lectures
              </h2>
              <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                NEET UG • BY AYUSH
              </p>
            </div>
          </div>
        </div>
        
        {chapters.map((chapter) => (
          <ChapterSection key={chapter.id} chapter={chapter} />
        ))}
      </main>
      
      <ThemeToggle />
      <Footer />
    </div>
  );
}

export default App;