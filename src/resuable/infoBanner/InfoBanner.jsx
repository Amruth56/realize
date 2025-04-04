import React from 'react';

const InfoBanner = ({ className = '', message = "Please select one of the following methods to evaluate your cyber insurance coverage. Each method has its own advantages, and I can help you understand which might work best for your organization.", title = "Hello! I'm here to help you choose the best assessment method.", iconSrc = "https://dashboard.codeparrot.ai/api/image/Z--rLuGYgKEKiAlX/img-3.png" }) => {
  return (
    <div className={`bg-blue-50 rounded-lg border border-gray-200 p-6 ${className}`} style={{ minWidth: '300px', maxWidth: '100%' }}>
      <div className="flex gap-4 items-start">
        <img 
          src={iconSrc} 
          alt="Info Avatar" 
          className="w-12 h-12 flex-shrink-0"
        />
        <div className="flex flex-col gap-2">
          <h3 className="text-gray-900 text-lg font-semibold">
            {title}
          </h3>
          <p className="text-gray-600 text-base">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;

