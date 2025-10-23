import React, { useState } from 'react';

// Main App Component using functional components and hooks
export default function App() {
  const [isFeatureEnabled, setIsFeatureEnabled] = useState(true);

  // Simple icon component using inline SVG for a clean look
  const SparkleIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006z" clipRule="evenodd" />
    </svg>
  );

  return (
    // Main container: full screen, centered, light background, using Inter font
    <div className="min-h-screen bg-gray-500 flex items-center justify-center p-4 font-sans">
      
      {/* Content Card: Max width, white background, shadow, rounded corners, responsive padding */}
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl p-6 md:p-10 lg:p-12 transition-all duration-300">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <SparkleIcon className="mx-auto text-indigo-500 mb-2 w-8 h-8" />
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Welcome to the Modern Web
          </h1>
          <p className="mt-3 text-xl text-gray-500 max-w-2xl mx-auto">
            A responsive and professional React component using Tailwind CSS for streamlined development.
          </p>
        </div>

        {/* Feature Grid Section */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1: Core Content */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
              Responsive Design
            </h3>
            <p className="text-gray-600">
              The layout adjusts automatically to fit any screen size, from mobile phones to large desktops, ensuring a great user experience everywhere.
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-indigo-600 bg-indigo-200 py-1 px-3 rounded-full">
              Mobile-First
            </span>
          </div>

          {/* Card 2: Interactive Element */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Toggle Feature State
            </h3>
            <p className="text-gray-600 mb-4">
              Demonstrates simple state management within the React component.
            </p>
            
            <button
              onClick={() => setIsFeatureEnabled(!isFeatureEnabled)}
              className={`w-full py-2 px-4 rounded-lg font-bold transition-colors duration-300 transform hover:scale-[1.02] ${
                isFeatureEnabled 
                  ? 'bg-green-500 text-white shadow-lg shadow-green-200 hover:bg-green-600'
                  : 'bg-red-500 text-white shadow-lg shadow-red-200 hover:bg-red-600'
              }`}
            >
              Feature is {isFeatureEnabled ? 'Enabled' : 'Disabled'}
            </button>

            <p className={`mt-3 text-center text-sm ${isFeatureEnabled ? 'text-green-600' : 'text-red-600'}`}>
              Status: {isFeatureEnabled ? 'Active' : 'Inactive'}
            </p>
          </div>
        </div>
        
        {/* Footer Text */}
        <div className="mt-10 pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2024 React + Tailwind Demo. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
