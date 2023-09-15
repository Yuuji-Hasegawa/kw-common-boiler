export const Thumb = ({modifier}) => {
  let frameClass = modifier ? `o-frame o-frame--${modifier}`: "o-frame";
  return (
    <picture className={frameClass}>
      <source type="image/avif" srcSet="img/thumb.avif" />
      <source type="image/webp" srcSet="img/thumb.webp" />
      <img
        src="img/thumb.png"
        width="100%"
        height="100%"
        loading="lazy"
        decoding="async"
        fetchpriority="low"
        alt=""
      />
    </picture>
  );
};
