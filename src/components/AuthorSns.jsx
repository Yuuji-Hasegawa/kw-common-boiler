import { IconFacebook } from "./IconFacebook";
import { IconTwitter } from "./IconTwitter";
import { IconX } from "./IconX";
import { IconInstagram } from "./IconInstagram";
import { IconYoutube } from "./IconYoutube";
import { IconLinkedin } from "./IconLinkedin";
import { IconLink } from "./IconLink";

export const AuthorSns = () => {
  return (
    <div className="o-cluster">
      <a className="c-text-link c-text-link--no-underline c-display-m" href="https://www.facebook.com/" target="_blank" rel="noopener">
        <IconFacebook />
      </a>
      <a className="c-text-link c-text-link--no-underline c-display-m" href="https://twitter.com/" target="_blank" rel="noopener">
        <IconTwitter />
      </a>
      <a className="c-text-link c-text-link--no-underline c-display-m" href="https://twitter.com/" target="_blank" rel="noopener">
        <IconX />
      </a>
      <a className="c-text-link c-text-link--no-underline c-display-m" href="https://www.instagram.com/" target="_blank" rel="noopener">
        <IconInstagram />
      </a>
      <a className="c-text-link c-text-link--no-underline c-display-m" href="https://www.youtube.com/" target="_blank" rel="noopener">
        <IconYoutube />
      </a>
      <a className="c-text-link c-text-link--no-underline c-display-m" href="https://www.linkedin.com/" target="_blank" rel="noopener">
        <IconLinkedin />
      </a>
      <a className="c-text-link c-text-link--no-underline c-display-m" href="https://www.google.com/" target="_blank" rel="noopener">
        <IconLink />
      </a>
    </div>
  );
};
