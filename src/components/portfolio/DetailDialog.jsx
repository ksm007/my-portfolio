import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import "./portfolio.css";

const DetailDialog = ({ open, onClose, title, content, image }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      className="details-dialog"
      PaperProps={{
        style: {
          backgroundColor: "#1f1f38",
          color: "#fff",
        },
      }}
    >
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        {image && (
          <Box mb={2}>
            <img
              src={image}
              alt={title}
              style={{
                width: "100%",
                maxHeight: "300px",
                objectFit: "contain",
              }}
            />
          </Box>
        )}

        <Typography style={{ whiteSpace: "pre-line" }}>{content}</Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailDialog;
