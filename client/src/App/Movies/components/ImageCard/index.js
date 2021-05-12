import React from 'react';
import { Card, CardMedia, CardContent } from '@material-ui/core';

import noImage from '../../../../assets/images/noImage.jpg';

const ImageCard = ({ imagePath, children }) => {
  return (
    <Card>
      <CardMedia component='img' src={imagePath || noImage} />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default ImageCard;
