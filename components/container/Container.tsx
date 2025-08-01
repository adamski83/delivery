"use client";

import {
  Container as MUIContainer,
  ContainerProps as MUIContainerProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const StyledContainer = styled(MUIContainer)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: "16px",
  paddingRight: "16px",
  [theme.breakpoints.up("sm")]: {
    paddingLeft: "16px",
    paddingRight: "16px",
  },
}));

interface ContainerProps extends Omit<MUIContainerProps, "maxWidth"> {
  children: React.ReactNode;
  maxWidth?: MUIContainerProps["maxWidth"];
}

const Container = ({ children, maxWidth = "xl", ...props }: ContainerProps) => {
  return (
    <StyledContainer maxWidth={maxWidth} {...props}>
      {children}
    </StyledContainer>
  );
};

export default Container;
