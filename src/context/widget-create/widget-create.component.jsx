import React from "react";
import { v4 as uuidv4 } from "uuid";
// Components
import { Box, Flex } from "@strapi/design-system";
import widgetsListData from "../../components/widgets/widget.json";
import usePageStore from "../../store/usePageStore";

const WidgetCreateComponent = ({ widgetsData, setWidgetsData }) => {
  const setActivePage = usePageStore((state) => state.setActivePage);

  const handleWidgetCreate = (widgetId) => {
    setWidgetsData([
      ...widgetsData,
      { id: widgetId, uuid: uuidv4(), name: "New Widget " + widgetId, description: "New Widget Description" },
    ]);
    setActivePage("widget-list");
  };

  return (
    <>
      {widgetsListData.map((widget) => {
        return (
          <Box
            onClick={() => {
              handleWidgetCreate(widget.id);
            }}
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
