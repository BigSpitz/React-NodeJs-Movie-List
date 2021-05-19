import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';
import styled from 'styled-components';

const StyledForm = styled.form`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const MoviesForm = ({ setSearchFields, genres = [] }) => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');

  const handleGenreChange = ({ target }) => {
    setSelectedGenre(target.value);
  };

  const handleTitleChange = ({ target }) => {
    setSelectedTitle(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchFields({
      title: selectedTitle,
      genre: selectedGenre,
      page: 1,
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormControl>
        <InputLabel id="genre">Genre</InputLabel>
        <Select
          name="genre"
          id="genre"
          value={selectedGenre}
          onChange={handleGenreChange}
          style={{ minWidth: '150px' }}
        >
          <MenuItem value="">All</MenuItem>
          {genres &&
            genres.map(({ id, name }) => (
              <MenuItem value={id} key={id}>
                {name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <TextField
        name="title"
        id="title"
        label="Movie Title"
        value={selectedTitle}
        onChange={handleTitleChange}
        style={{ margin: '0px 20px', maxWidth: '500px', flexGrow: 1 }}
      />
      <Button size="medium" type="submit" style={{ marginTop: '15px' }}>
        Search
      </Button>
    </StyledForm>
  );
};

export default MoviesForm;
