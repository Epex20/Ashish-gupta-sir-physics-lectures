import React from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { Link as LinkType } from '../types';

interface LinkTileProps {
  link: LinkType;
  onVideoClick?: (url: string, title: string) => void;
}

const LinkTile: React.FC<LinkTileProps> = ({ link, onVideoClick }) => {
  const isVideo = link.url.includes('.webm') || link.url.includes('.mp4') || link.url.includes('video');
  
  const handleClick = (e: React.MouseEvent) => {
    if (isVideo && onVideoClick) {
      e.preventDefault();
      onVideoClick(link.url, link.text);
    }
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group relative bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 shadow-md 
                 transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                 border border-gray-200 dark:border-gray-700
                 flex items-center justify-between"
    >
      <span className="text-sm sm:text-base text-gray-800 dark:text-gray-200 font-medium">{link.text}</span>
      
      <div className="flex items-center justify-center bg-indigo-100 dark:bg-indigo-900 
                     p-1.5 sm:p-2 rounded-full text-indigo-600 dark:text-indigo-300
                     transition-all duration-300 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800">
        {isVideo ? (
          <Play size={14} className="sm:w-4 sm:h-4" fill="currentColor" />
        ) : (
          <ExternalLink size={14} className="sm:w-4 sm:h-4" />
        )}
      </div>
      
      <div className="absolute inset-0 bg-indigo-500 opacity-0 rounded-lg transition-opacity duration-300 
                     group-hover:opacity-5 pointer-events-none" />
    </a>
  );
};

export default LinkTile;