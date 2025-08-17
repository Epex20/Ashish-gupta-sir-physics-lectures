import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import PromotionalCard from './PromotionalCard';
import ParticleBackground from './ParticleBackground';

interface VideoModalProps {
  videoUrl: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, title, isOpen, onClose }) => {
  const [showPromo, setShowPromo] = useState(true);

  if (!isOpen) return null;

  const handleContinue = () => {
    setShowPromo(false);
  };

  const handleClose = () => {
    setShowPromo(true);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black">
      <ParticleBackground />
      
      {showPromo ? (
        <PromotionalCard onClose={handleClose} onContinue={handleContinue} />
      ) : (
        <div className="relative w-full h-full">
          <VideoPlayer
            videoUrl={videoUrl}
            title={title}
            onClose={handleClose}
          />
        </div>
      )}
    </div>
  );
};

export default VideoModal;