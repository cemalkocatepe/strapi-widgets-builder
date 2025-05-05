import React, { useEffect, useState } from "react";
import { Box, Flex, JSONInput } from "@strapi/design-system";

import WidgetBuilderComponent from "./context/widget-builder/widget-builder.component";

import data from "./data/dataResult.json";

const App = () => {
  const [widgetsData, setWidgetsData] = useState(data.widgetsData);

  useEffect(() => {
    console.log(widgetsData);
  }, [widgetsData]);

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
        <WidgetBuilderComponent widgetsData={widgetsData} setWidgetsData={setWidgetsData} />
      </Box>
      <Box
        style={{
          height: "100vh",
          width: "80%",
          overflowY: "auto",

          backgroundColor: "#fff", // Strapi'nin beyaz tonu
        }}>
        <JSONInput aria-label="JSON" height="100vh" value={JSON.stringify(widgetsData, null, "\t")} />
      </Box>
    </Flex>
  );
};

export default App;
