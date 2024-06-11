import { Pagination } from '@mui/material';
import Stack from '@mui/material/Stack';

function BasicPagination({
  pageCount,
  currentPage,
  handlePageChange,
}: {
  pageCount: number;
  currentPage: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={handlePageChange}
        variant='outlined'
        color='primary'
        size='large'
      />
    </Stack>
  );
}

export default BasicPagination;
