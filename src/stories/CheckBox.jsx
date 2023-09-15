import React from "react";
import "../styles/objects/_o-stack.scss";
import "../styles/objects/_o-box.scss";
import "../styles/objects/_o-cluster.scss";
import "../styles/objects/_o-icon.scss";
import "../styles/components/_c-text.scss";
import "../styles/generic/_resets.scss";

export const CheckBox = () => {
  return (
    <div className="o-stack o-stack--l">
      <div className="o-cluster">
        <label className="o-icon-parent o-icon-parent--center o-icon-parent--form-item">
          <input className="o-box o-box--checkbox" type="checkbox" />item1
        </label>
        <label className="o-icon-parent o-icon-parent--center o-icon-parent--form-item">
          <input className="o-box o-box--checkbox" type="checkbox" />item2
        </label>
      </div>
      <label className="o-icon-parent o-icon-parent--full-wide o-icon-parent--center o-icon-parent--form-item u-mt-m u-mb-m">
        <input className="o-box o-box--checkbox" type="checkbox" /><a className="c-text-link" href="#">プライバシーポリシー</a>に同意する
      </label>
    </div>
  );
};
