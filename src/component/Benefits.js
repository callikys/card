import React from "react";
import '../css/Benefits.css';

export default function Benefits({ benefitsData }) {
  const formatBenefitsText = (text) => {
    return text
      .replace(/\\n/g, "<br />")
      .replace(/\\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
  };

  return (
    <div className="benefits">
      {benefitsData && (
        <div>
          {benefitsData.map((benefit, index) => (
            <div key={index} className="benefit-container">
              {benefit["benefit_detail"] && (
                <div>
                  <div className="benefit-title">{benefit.title}</div>
                  <div
                    className="benefit-detail"
                    dangerouslySetInnerHTML={{
                      __html: formatBenefitsText(benefit["benefit_detail"]),
                    }}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
