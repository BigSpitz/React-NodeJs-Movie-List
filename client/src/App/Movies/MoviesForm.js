import React from 'react';
import {
  Input,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import styled from 'styled-components';

const StyledForm = styled.form`
  margin-top: 20px;
  margin-bottom: 40px;
`;

const MoviesForm = ({ searchQuery, setSearchQuery, handleSubmit }) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormControl>
        <InputLabel htmlFor='title'>Search</InputLabel>
        <Input
          id='title'
          defaultValue={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton type='submit'>
                <Search />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </StyledForm>
  );
};

export default MoviesForm;
