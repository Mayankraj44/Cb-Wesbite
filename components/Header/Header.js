import React from "react";
import Image from "next/image";
import { Grid } from "@mui/material";
import menuImg from "../../assets/images/cb-menu.png";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles( (theme) => ({
  header: "10px 30px"
}));

const Header = () => {
  const classes = useStyles({});
  return (
    <Grid container className={classes.header}>
      <Grid item xs={8}>
        logo
      </Grid>
      <Grid item xs={4} container justifyContent="flex-end">
        <Image
          src={menuImg}
          //  layout="responsive"
          height="30px"
          width="30px"
        />
      </Grid>
    </Grid>
  );
};

export default Header;
