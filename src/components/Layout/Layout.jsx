import React from "react";
import { HeaderS } from "../Header/HeaderS";
import { FooterS } from "../Footer/FooterS";
import { Outlet } from "react-router-dom";
import { LayoutWrapper } from "./LayoutWrapper";
import { ContentWrapper } from "./ContentWrapper";

const Layout = () => {
  return (
    <LayoutWrapper>
      <HeaderS />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <FooterS />
    </LayoutWrapper>
  );
};

export default Layout;
