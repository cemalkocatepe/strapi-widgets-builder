import React from "react";
import { Box, Flex } from "@strapi/design-system";

const App = () => {
  const ContentElements = ({ item }) => {
    const elements = [];
    for (let i = 0; i < item; i++) {
      elements.push(<p>Item {i + 1}</p>);
    }
    return <>{elements}</>;
  };

  return (
    <Flex style={{ minHeight: "100%" }}>
      <Box
        style={{
          height: "100vh",
          width: "30%",
          overflowY: "auto",
          backgroundColor: "#f6f6f9", // Strapi'nin açık gri tonu
          borderRight: "1px solid #e1e1e9",
        }}>
        <ContentElements item={100} />
      </Box>
    </Flex>
  );
};

export default App;
