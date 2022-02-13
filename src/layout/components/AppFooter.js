import React from "react";
import "./AppFooter.css";
import { FaRegCopyright } from "react-icons/fa";
import { BiStore, BiPhoneCall, BiLocationPlus } from "react-icons/bi";

const AppFooter = () => {
  return (
    <>
      <div className="footer">
        <div className="left">
          <img src="/UNIADJ WHITE.png" className="whitelogo" />
        </div>

        <div className="line"></div>

        <div className="middle">
          <div className="icon">
            <FaRegCopyright className="copyright" />
          </div>
          2020 UNI-ADJ All Rights Reserved
        </div>

        <div className="third">
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

        <div className="last">
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
