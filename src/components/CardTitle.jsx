export const CardTitle = ({contentTitle, modifier}) => {
  let titleClass = modifier ? `c-card-link c-card-link--${modifier}`: "c-card-link";
  return (
    <h3 className={titleClass}>{contentTitle}</h3>
  );
};
