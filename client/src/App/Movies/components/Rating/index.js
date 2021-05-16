import React from "react";
import { CircularProgress, Typography, Box } from "@material-ui/core";
import styled from "styled-components";

const StyledRatingContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 50%;
  color: white;
`;

const Rating = ({ rating }) => {
  return (
    <Box position="absolute" display="inline-flex" top={-30} right={2}>
      <StyledRatingContainer>
        <CircularProgress
          variant="determinate"
          size={50}
          thickness={4}
          value={rating}
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="subtitle2"
            component="div"
            color="white"
            style={{ fontWeight: 600 }}
          >{`${Math.round(rating)}%`}</Typography>
        </Box>
      </StyledRatingContainer>
    </Box>
  );
};

export default Rating;
