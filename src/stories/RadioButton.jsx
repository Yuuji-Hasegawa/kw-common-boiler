import React from "react";
import "../styles/objects/_o-box.scss";
import "../styles/objects/_o-cluster.scss";
import "../styles/objects/_o-icon.scss";
import "../styles/generic/_resets.scss";

export const RadioButton = () => {
  return (
    <div className="o-cluster">
      <label className="o-icon-parent o-icon-parent--center o-icon-parent--form-item">
        <input name="item" className="o-box o-box--radio" type="radio" />item1
      </label>
      <label className="o-icon-parent o-icon-parent--center o-icon-parent--form-item">
        <input name="item" className="o-box o-box--radio" type="radio" />item2
      </label>
    </div>
  );
};
