import React from "react";
import { ScoreIndicator } from "../ScoreIndicator";

function MainWidgetPosition({
  score,
  comparedCurrency,
  currencyValue,
  valueChange,
}: any) {
  const preapreValueChange = () => {
    return valueChange >= 0 ? "+ " + valueChange : "- " + Math.abs(valueChange);
  };

  const colorForText = valueChange >= 0 ? "text-green-500" : "text-red-500";

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <ScoreIndicator value={score} />
        <span className="ml-5">EUR/{comparedCurrency}</span>
      </div>
      <div className={`text-sm font-medium ${colorForText}`}>
        {currencyValue} EUR / {preapreValueChange()} %
      </div>
    </div>
  );
}

export default MainWidgetPosition;
