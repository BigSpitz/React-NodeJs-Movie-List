import { Pagination } from '@material-ui/lab';
import styled from 'styled-components';

const StyledPagination = styled.div`
  float: right;
  margin-bottom: 10px;
`;

const MoviesPagination = ({ totalItems = 0, page = 1, handlePageChange }) => {
  return (
    <StyledPagination>
      <Pagination
        count={Math.ceil(totalItems / 10)}
        page={page}
        onChange={handlePageChange}
      />
    </StyledPagination>
  );
};

export default MoviesPagination;
