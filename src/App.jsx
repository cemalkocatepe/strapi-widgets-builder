import React from "react";
import { Box, Flex, Typography } from "@strapi/design-system";
import widgetsData from "./components/widgets/widget.json";
import loremText from "./data/lorem.txt?raw";

const App = () => {
  const ContentElements = () => {
    const widget = widgetsData.map((widget) => {
      return (
        <Box
          key={widget.id}
          style={{
            padding: "10px",
            margin: "10px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}>
          <h3>{widget.name}</h3>
          <p>{widget.description}</p>
        </Box>
      );
    });

    return widget;
  };
  return (
    <Flex style={{ minHeight: "100%" }}>
      <Box
        style={{
          height: "100vh",
          width: "20%",
          overflowY: "auto",
          padding: "10px",
          backgroundColor: "#f6f6f9", // Strapi'nin açık gri tonu
          borderRight: "1px solid #e1e1e9",
        }}>
        <ContentElements item={100} />
      </Box>
      <Box
        style={{
          height: "100vh",
          width: "80%",
          overflowY: "auto",
          padding: "10px",
          backgroundColor: "#fff", // Strapi'nin beyaz tonu
        }}>
        <Typography>{loremText}</Typography>
      </Box>
    </Flex>
  );
};

export default App;
