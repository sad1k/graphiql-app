import { InputLabel, styled, TextField } from '@mui/material';

interface IStyledInput {
  placeholder: string;
  label: string;
}

export const StyledInput = ({ placeholder, label }: IStyledInput) => {
  const StyledTextField = styled(TextField)({
    borderColor: '#F2F2F2',
    backgroundColor: '#F2F2F2',
    borderRadius: '5px',
  });

  return (
    <>
      <InputLabel htmlFor='url-id'>{label}</InputLabel>
      <StyledTextField
        sx={{
          marginBottom: '10px',
        }}
        size='small'
        type='text'
        id='url-id'
        name='url-id'
        required
        placeholder={placeholder}
        variant='outlined'
        fullWidth
      />
    </>
  );
};
