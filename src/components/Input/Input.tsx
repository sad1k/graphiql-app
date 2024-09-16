import {
  Box,
  InputLabel,
  styled,
  TextField,
  TextFieldProps,
} from '@mui/material';

interface IStyledInput extends TextFieldProps<'outlined'> {
  value?: string;
  placeholder: string;
  label: string;
}

export const StyledInput = ({
  value,
  onChange,
  placeholder,
  label,
  ...props
}: IStyledInput) => {
  const StyledTextField = styled(TextField)({
    borderColor: '#F2F2F2',
    backgroundColor: '#F2F2F2',
    borderRadius: '5px',
  });

  return (
    <Box sx={props.sx}>
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
        fullWidth
        onChange={onChange}
        value={value}
        {...props}
      />
    </Box>
  );
};
