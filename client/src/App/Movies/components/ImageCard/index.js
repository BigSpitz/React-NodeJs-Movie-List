import React from 'react';
import { Card, CardMedia, CardContent } from '@material-ui/core';

import noImage from '../../../../assets/images/noImage.jpg';

const ImageCard = ({ imagePath, children }) => {
  return (
    <Card style={{height: '100%'}}>
      <CardMedia height={288} component='img' src={imagePath || noImage} />
      <CardContent style={{position: 'relative'}}>{children}</CardContent>
    </Card>
  );
};

export default ImageCard;
