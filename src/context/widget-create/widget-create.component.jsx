import React from "react";
// Components
import { Box, Flex } from "@strapi/design-system";
import widgetsData from "../../components/widgets/widget.json";

const WidgetCreateComponent = () => {
  return (
    <>
      {widgetsData.map((widget) => {
        return (
          <Box
            onClick={() => alert(`${widget.name} tıklandı!`)}
            key={widget.id}
            style={{
              padding: "10px",
              margin: "10px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}>
            <Flex alignItems="center" justifyContent="space-between">
              <Box>
                <h3>{widget.name}</h3>
                <h3>{widget.description}</h3>
              </Box>
            </Flex>
          </Box>
        );
      })}
    </>
  );
};

export default WidgetCreateComponent;
