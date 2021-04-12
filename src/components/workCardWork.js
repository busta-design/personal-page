import { Typography } from '@material-ui/core';
import Image from './image';

const WorkCardWork = ({
  img,
  company,
  post,
  initialDate,
  finalDate,
  description,
}) => {
  return (
    <div>
      {img && <Image image={img} width="150px" height="70px" />}
      <Typography gutterBottom variant="h3">
        {company}
      </Typography>
      <Typography gutterBottom variant="h5">
        {post}
      </Typography>
      <Typography gutterBottom variant="subtitle1">
        {initialDate} - {finalDate}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {description}
      </Typography>
    </div>
  );
};

export default WorkCardWork;
