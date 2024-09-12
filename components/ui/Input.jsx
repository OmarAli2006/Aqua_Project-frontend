"use client";

import { Box, Grid2, TextField, Typography } from "@mui/material";
import { ErrorMessage } from "formik";

const Input = ({ name, label, type, onChange }) => {
  return (
    <Grid2 item xs={12} sm={3} >
      <Typography variant="subtitle2" gutterBottom color="#264e70" sx={{ fontWeight: 'semibold' }}>
        {label}
      </Typography>
      <Box sx={{ position: 'relative', padding: 0 }}>
        <TextField
          fullWidth
          name={name}
          variant="outlined"
          type={type}
          onChange={onChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#264e70',
              },
              '&:hover fieldset': {
                borderColor: '#1a365d',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1a365d',
              },
            },
          }}
        />
        <ErrorMessage
          name={name}
          component={Typography}
          color="error"
          sx={{
            position: 'absolute',
            bottom: -20,
            left: 0,
            fontSize: '0.75rem',
          }}
        />
      </Box>
    </Grid2>
  );
};

export default Input;
