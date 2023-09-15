import { IconClone } from "./IconClone.jsx";

export const ShareUrl = () => {
  return (
    <div className="c-share-parent">
      <input type="text" className="o-box o-box--input o-box--full-wide o-box--share c-content-l" value="https://examples.com/information/xx/" readOnly={true} />
      <IconClone />
    </div>
  );
};
