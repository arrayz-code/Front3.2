import React from 'react';

const PromotionBanner = ({ promotionTitle, promotionSubtitle, startDate, endDate }) => {
  const formattedStartDate = new Intl.DateTimeFormat('default', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(startDate));
  const formattedEndDate = new Intl.DateTimeFormat('default', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(endDate));

  return (
    <div className="bg-white shadow p-4 rounded-lg">
      <h3 className="font-semibold text-gray-900 mb-2">{promotionTitle}</h3>
        <p className="mb-2"><span className="font-semibold">Valid:</span> {formattedStartDate} - {formattedEndDate}</p>
        <p className="text-gray-600">{promotionSubtitle}</p>
    </div>
  );
};

export default PromotionBanner;
