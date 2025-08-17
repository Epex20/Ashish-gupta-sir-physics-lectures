import React from 'react';
import { X, Send } from 'lucide-react';

interface PromotionalCardProps {
  onClose: () => void;
  onContinue: () => void;
}

const PromotionalCard: React.FC<PromotionalCardProps> = ({ onClose, onContinue }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 relative overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Logo/Icon */}
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <div className="text-2xl font-bold text-white">AV</div>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            AYUSH VIDEO PLAYER
          </h2>
          
          <p className="text-indigo-200 mb-6 text-sm sm:text-base">
            Premium Physics Lectures Experience
          </p>

          {/* Features */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-white">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>HD Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Speed Control</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Resume/Pause</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Full Screen</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
            <p className="text-white text-sm mb-3">Connect with me:</p>
            <a
              href="https://telegram.dog/Imayuu03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all transform hover:scale-105"
            >
              <Send size={16} />
              <span>@Imayuu03</span>
            </a>
          </div>

          {/* Continue Button */}
          <button
            onClick={onContinue}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Start Watching
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default PromotionalCard;