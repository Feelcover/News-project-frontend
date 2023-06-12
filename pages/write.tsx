import React from "react";
import WriteArea from "../components/WriteArea/WriteArea";
import { MainLayout } from "../layouts/MainLayout";

const write = () => {
  return (
    <MainLayout className="layout-white" hideComments hideMenu>
      <WriteArea />
    </MainLayout>
  );
};

export default write;
