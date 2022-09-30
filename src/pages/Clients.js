import {
  TableContainer,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Checkbox,
  Typography,
} from "@mui/material";

import React from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Clients = () => {
  return (
    <>
      <Typography sx={{ my: 3, width: 240, mx: "auto" }} variant="h3">
        Client List
      </Typography>

      <TableContainer
        sx={{
          border: "black solid 1px",
          width: 330,
          mx: "auto",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>Sr No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>John</TableCell>
            <TableCell>
              <Checkbox {...label} />
            </TableCell>
            <TableCell>unpaid</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Smith</TableCell>
            <TableCell>
              <Checkbox {...label} />
            </TableCell>
            <TableCell>unpaid</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>Giberal</TableCell>
            <TableCell>
              <Checkbox {...label} />
            </TableCell>
            <TableCell>paid</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4</TableCell>
            <TableCell>jobiden</TableCell>
            <TableCell>
              <Checkbox {...label} />
            </TableCell>
            <TableCell>unpaid</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>5</TableCell>
            <TableCell>Pathel</TableCell>
            <TableCell>
              <Checkbox {...label} />
            </TableCell>
            <TableCell>paid</TableCell>
          </TableRow>
        </TableBody>
      </TableContainer>
    </>
  );
};

export default Clients;
