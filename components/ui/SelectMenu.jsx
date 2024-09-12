"use client";

import React from "react";
import {
  Box,
  Grid2,
  MenuItem,
  Select as MuiSelect,
  Typography,
} from "@mui/material";
import { ErrorMessage } from "formik";

const SelectMenu = ({ options, label, value, name, onChange }) => {
  return (
    <Grid2 item xs={12} sm={3}>
      <Typography
        variant="subtitle2"
        gutterBottom
        color="#264e70"
        sx={{ fontWeight: "semibold" }}
      >
        {label}
      </Typography>
      <Box sx={{ position: "relative", padding: 0, width: "100%" }}>
        <MuiSelect
          name={name}
          value={value}
          label={label}
          onChange={onChange}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#264e70",
              },
              "&:hover fieldset": {
                borderColor: "#1a365d",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#1a365d",
              },
            },
            width: "100%",
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </MuiSelect>
        <ErrorMessage
          name={name}
          component={Typography}
          color="error"
          sx={{
            position: "absolute",
            bottom: -20,
            left: 0,
            fontSize: "0.75rem",
          }}
        />
      </Box>
    </Grid2>
  );
};

export default SelectMenu;
