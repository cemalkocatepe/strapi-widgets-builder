import React from "react";
import { v4 as uuidv4 } from "uuid";
// Components
import { Box, Flex } from "@strapi/design-system";
// Widgets Content
import widgetsListSchema from "../../components/widgets/widget.json";
import widgetsValue from "../../components/widgets/widget-value";
// Store
import usePageStore from "../../store/usePageStore";
import useWidgetStore from "../../store/useWidgetStore";

const WidgetCreateComponent = ({ widgetsData, setWidgetsData }) => {
  const setActivePage = usePageStore((state) => state.setActivePage);
  const setActiveWidgetData = useWidgetStore((state) => state.setActiveWidgetData);

  const handleWidgetCreate = (widgetId) => {
    const widgetItemValue = widgetsValue[widgetId];
    const widgetItem = {
      id: widgetId,
      uuid: uuidv4(),
      ...widgetItemValue,
    };
    setWidgetsData([...widgetsData, widgetItem]);
    setActiveWidgetData(widgetItem);
    setActivePage("widget-edit");
  };

  return (
    <>
      {widgetsListSchema.map((widget) => {
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
