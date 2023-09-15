import { AuthorImg } from "./AuthorImg";
import { BioName } from "./BioName";
import { Date } from "./Date";
import { IconCal } from "./IconCal";
import { IconRotate } from "./IconRotate";

export const AuthorBio = ({hasUpdate}) => {
  return (
    <div className="o-sidebar o-sidebar--bio">
      <div className="o-sidebar__bio-pict">
        <AuthorImg />
      </div>
      <div className="o-sidebar__bio-data o-stack">
        <BioName />
        <div className="o-cluster">
          <time className="o-icon-parent">
            <IconCal />
            <Date date='2023.00.00' fontSize='m' type='span' />
          </time>
          {hasUpdate && <time className="o-icon-parent">
            <IconRotate />
            <Date date='2023.00.00' fontSize='m' type='span' />
          </time>}
        </div>
      </div>
    </div>
  );
};
