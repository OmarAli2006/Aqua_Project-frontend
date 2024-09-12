import { Grid2, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { ErrorMessage } from "formik";
import React from "react";

const Calendar = ({ name, label, onChange }) => {
  return (
    <Grid2 item xs={12} sm={6}>
      <Typography
        variant="subtitle2"
        gutterBottom
        color="#264e70"
        sx={{ fontWeight: "semibold" }}
      >
        {label}
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker name={name} onChange={onChange} />
        </DemoContainer>
      </LocalizationProvider>
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
    </Grid2>
  );
};

export default Calendar;
