import React from "react";

export default function Benefits({ benefitsData }) {
  const formatBenefitsText = (text) => {
    return text
      .replace(/\\n/g, "<br />")
      .replace(/\\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
  };

  return (
    <div>
      {benefitsData && (
        <div>
          {benefitsData.map((benefit, index) => (
            <div key={index}>
              {benefit["benefit_detail"] && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: formatBenefitsText(benefit["benefit_detail"]),
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
