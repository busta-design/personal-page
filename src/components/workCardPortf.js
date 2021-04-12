import { Typography, Link } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import Image from './image';

const hasLinkProject = (linkPage, nameProject) => {
  if (linkPage) {
    return (
      <Typography gutterBottom variant="h3">
        <Link href={linkPage} target="_blank" color="inherit">
          {nameProject}
        </Link>
      </Typography>
    );
  } else {
    return (
      <Typography gutterBottom variant="h3">
        {nameProject}
      </Typography>
    );
  }
};

const WorkCardPortf = ({
  img,
  nameProject,
  description,
  linkRepo,
  linkPage,
}) => {
  const { t } = useTranslation();
  return (
    <div>
      {img && <Image image={img} width="150px" height="70px" />}
      {hasLinkProject(linkPage, nameProject)}

      <Typography gutterBottom variant="h5">
        <Link href={linkRepo} target="_blank">
          {t('workExp.repo')}
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {description}
      </Typography>
    </div>
  );
};

export default WorkCardPortf;
