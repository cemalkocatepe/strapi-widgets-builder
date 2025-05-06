import React from "react";
import { v4 as uuidv4 } from "uuid";
// Components
import { Box, Flex } from "@strapi/design-system";
import usePageStore from "../../store/usePageStore";
import widgetsListSchema from "../../components/widgets/widget.json";
import WidgetsValue from "../../components/widgets/widget-value";
import useWidgetStore from "../../store/useWidgetStore";

const WidgetCreateComponent = ({ widgetsData, setWidgetsData }) => {
  const setActivePage = usePageStore((state) => state.setActivePage);
  const setActiveWidgetData = useWidgetStore((state) => state.setActiveWidgetData);

  const handleWidgetCreate = (widgetId) => {
    const widgetItemValue = WidgetsValue[widgetId]; // widgetId'ye göre widgetItemValue alıyoruz
    const widgetItem = {
      id: widgetId,
      uuid: uuidv4(),
      ...widgetItemValue,
    };
    setWidgetsData([...widgetsData, widgetItem]); // yeni widgetItem'ı widgetsData props'a ekliyoruz
    setActiveWidgetData(widgetItem); // zustand store'a widgetItem'ı gönderiyoruz
    setActivePage("widget-list"); // tab widget-list'e yönlendiriyoruz
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
