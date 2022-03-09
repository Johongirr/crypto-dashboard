import React from "react";
import { TextField, FormControl } from "@mui/material";

function SearchCrypto({ updateUserVal }) {
  return (
    <FormControl
      fullWidth
      sx={{ backgroundColor: "#f7f7f7", marginTop: "20px" }}
    >
      <TextField
        id="outlined-basic"
        label="Search For cryptocurrencies"
        variant="outlined"
        sx={{ borderRadius: "10px" }}
        onChange={(e) => updateUserVal(e.target.value)}
      />
    </FormControl>
  );
}

export default SearchCrypto;
