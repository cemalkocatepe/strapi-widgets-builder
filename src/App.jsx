import React from "react";
import { Box, Flex, Typography } from "@strapi/design-system";

import WidgetBuilderComponent from "./context/widget-builder/widget-builder.component";
import loremText from "./data/lorem.txt?raw";

const App = (props) => {
  return (
    <Flex style={{ minHeight: "100%" }}>
      <Box
        style={{
          height: "100vh",
          width: "20%",
          overflowY: "auto",
          backgroundColor: "#f6f6f9", // Strapi'nin açık gri tonu
          borderRight: "1px solid #e1e1e9",
        }}>
        <WidgetBuilderComponent {...props} />
      </Box>
      <Box
        style={{
          height: "100vh",
          width: "80%",
          overflowY: "auto",

          backgroundColor: "#fff", // Strapi'nin beyaz tonu
        }}>
        <Typography>{loremText}</Typography>
      </Box>
    </Flex>
  );
};

export default App;
