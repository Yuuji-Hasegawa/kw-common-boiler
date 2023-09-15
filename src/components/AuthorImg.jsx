export const AuthorImg = () => {
  return (
    <picture className="o-frame o-frame--round">
      <source type="image/avif" srcSet="img/profile.avif" />
      <source type="image/webp" srcSet="img/profile.webp" />
      <img
        src="img/profile.png"
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
