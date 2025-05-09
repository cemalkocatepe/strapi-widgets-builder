import React from "react";
import { v4 as uuidv4 } from "uuid";
// Components
import { Box, Flex } from "@strapi/design-system";
import { WidgetItem } from "./widget-create.styles";
// Widgets Content
import widgetsListSchema from "../../components/widgets/widget.json";
import widgetsValue from "../../components/widgets/widget-value";
// Store
import usePageStore from "../../store/usePageStore";
import useWidgetStore from "../../store/useWidgetStore";

const WidgetCreateComponent = ({ widgetsData, setWidgetsData }) => {
  const setActivePage = usePageStore((state) => state.setActivePage);
  const setEditWidgetData = useWidgetStore((state) => state.setEditWidgetData);

  const handleWidgetCreate = (widgetId) => {
    const widgetItemValue = widgetsValue[widgetId];
    const widgetItem = {
      id: widgetId,
      uuid: uuidv4(),
      ...widgetItemValue,
    };
    setWidgetsData([...widgetsData, widgetItem]);
    setEditWidgetData(widgetItem);
    setActivePage("widget-edit");
  };

  return (
    <>
      {widgetsListSchema.map((widget) => {
        return (
          <WidgetItem
            onClick={() => {
              handleWidgetCreate(widget.id);
            }}
            key={widget.id}>
            <Flex alignItems="center" justifyContent="space-between">
              <Box>
                <h3>{widget.name}</h3>
                <h3>{widget.description}</h3>
              </Box>
            </Flex>
          </WidgetItem>
        );
      })}
    </>
  );
};

export default WidgetCreateComponent;
