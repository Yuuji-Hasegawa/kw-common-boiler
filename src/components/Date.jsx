export const Date = ({date, fontSize, type}) => {
  let Tag = type ? type : "time";
  let dateClass = fontSize ? `c-content-${fontSize} c-number-text-variant u-txt-weight-b`: "c-content-l c-number-text-variant u-txt-weight-b";
  return (
    <Tag className={dateClass}>{date}</Tag>
  );
};
