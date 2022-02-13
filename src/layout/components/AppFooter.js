import React from "react";
import { makeStyles } from "@mui/styles";
import "./AppFooter.css";
import { Divider } from "@mui/material";
import { FaRegCopyright } from "react-icons/fa";
import { BiStore, BiPhoneCall, BiLocationPlus } from "react-icons/bi";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "rgb(56, 56, 56)",
    marginTop: "1rem",
    display: "flex",
    flexWrap: "nowrap",
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
    },
  },
  section: {
    color: "rgb(146, 145, 145)",
    flexBasis: "23.5%",
    boxSizing: "border-box",
  },
  first: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexBasis: "47%",
    },
    justifyContent: 'flex-end'
  },
  second: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: '1rem 0',
    flexBasis: "6%",
    boxSizing: "border-box",
  },
  third: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontWeight: 400,
    fontSize: "10.8px",
    [theme.breakpoints.down("md")]: {
      flexBasis: "47%",
    },
  },
  fourth: {
    [theme.breakpoints.down("md")]: {
      flexBasis: "50%",
    },
  },
  fifth: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontWeight: 400,
    fontSize: "10.8px",
    [theme.breakpoints.down("md")]: {
      flexBasis: "50%",
    },
  },
}));

const AppFooter = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.footer}>
        <div className={`${classes.section} ${classes.first}`}>
          <img src="/UNIADJ WHITE.png" className="whitelogo" alt='footer-logo' />
        </div>

        <div className={`${classes.section} ${classes.second}`}>
          <Divider
            orientation="vertical"
            sx={{ borderColor: "rgb(104, 104, 104)", borderRightWidth: 2 }}
          />
        </div>

        <div className={`${classes.section} ${classes.third}`}>
          <div className="icon">
            <FaRegCopyright className="copyright" />
          </div>
          2021 UNI-ADJ All Rights Reserved
        </div>

        <div className={`${classes.section} ${classes.fourth}`}>
          <div className="right">
            <BiStore className="store" />
            <div className="onlinestores">
              You can also find us here:
              <div className="links">
                <a
                  href="https://shopee.ph/uni_adj.appliancestrading"
                  className="shopee"
                >
                  Shopee
                </a>
                <a
                  href="https://www.lazada.com.ph/shop/uni-adj-appliances-trading/?spm=a2o4l.pdp_revamp.seller.1.27dcb1b6B3gJV0&itemId=2048801456&channelSource=pdp"
                  className="lazada"
                >
                  Lazada
                </a>
              </div>
            </div>
          </div>

          <div className="location">
            <BiLocationPlus className="map" />
            <div className="storelocation">
              <div className="textlocation">Location:</div>
              <div className="address">
                0806 Zone 4, San Isidro Hagonoy, Bulacan
              </div>
            </div>
          </div>
        </div>

        <div className={`${classes.section} ${classes.fifth}`}>
          <BiPhoneCall className="telephone" />
          <div className="contact">
            <div>Contact Us:</div>
            <div className="number">09339864492 (Business)</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppFooter;
