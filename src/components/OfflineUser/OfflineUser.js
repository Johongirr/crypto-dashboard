import React from "react";
import { Offline } from "react-detect-offline";
import { Button, Box, Typography } from "@mui/material";
import NetworkDown from "../../images/6119820.png";

function OfflineUser() {
  return (
    <Offline>
      <>
        <Box
          sx={{
            position: "absolute",
            top: { xs: "35%", sm: "40%" },
            left: { xs: "40%", sm: "50%" },
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <img width="200" src={NetworkDown} alt="Internet connection down " />
          <Typography variant="h4">You are offline</Typography>
          <Typography>check your connection to the internet</Typography>
          <Button
            variant="contained"
            onClick={() => window.location.reload()}
            size="large"
          >
            Retry
          </Button>
        </Box>
      </>
    </Offline>
  );
}

export default OfflineUser;
