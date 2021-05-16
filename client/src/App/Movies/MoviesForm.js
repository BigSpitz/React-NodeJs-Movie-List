import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@material-ui/core';
import styled from 'styled-components';

import { selectGenres } from './moviesSlice';

const StyledForm = styled.form`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const MoviesForm = ({ setSearchFields }) => {
  const genres = useSelector(selectGenres);
  const [selectedGenre, setSelectedGenre] = useState('')
  const [selectedTitle, setSelectedTitle] = useState('')

  const handleGenreChange = ({target}) => {
    setSelectedGenre(target.value)
  }

  const handleTitleChange = ({target}) => {
    setSelectedTitle(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchFields({
      title: selectedTitle,
      genre: selectedGenre,
      page: 1
    })
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormControl>
        <InputLabel id='genre'>Genre</InputLabel>
        <Select
          name='genre'
          id='genre'
          value={selectedGenre}
          onChange={handleGenreChange}
          style={{ minWidth: '150px' }}
        >
          <MenuItem value=''>All</MenuItem>
          {genres.map(({ _id, name }) => (
            <MenuItem value={_id} key={_id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        name='title'
        id='title'
        label='Movie Title'
        value={selectedTitle}
        onChange={handleTitleChange}
        style={{ margin: '0px 20px', maxWidth: '500px', flexGrow: 1 }}
      />
      <Button size='medium' type='submit' style={{ marginTop: '15px' }}>
        Search
      </Button>
    </StyledForm>
  );
};

export default MoviesForm;
