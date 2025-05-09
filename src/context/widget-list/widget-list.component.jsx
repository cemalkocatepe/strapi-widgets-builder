import React from "react";
import { Reorder } from "motion/react";
// Components
import { Box, Button, Flex, IconButton, IconButtonGroup } from "@strapi/design-system";
import { Trash, Pencil, CheckCircle } from "@strapi/icons";
import { WidgetItem } from "./widget-list.styles";
// Store
import usePageStore from "../../store/usePageStore";
import useWidgetStore from "../../store/useWidgetStore";

const WidgetListComponent = ({ widgetsData, setWidgetsData }) => {
  const setActivePage = usePageStore((state) => state.setActivePage);
  const setEditWidgetData = useWidgetStore((state) => state.setEditWidgetData);

  const handleWidgetDelete = (widgetUUID) => {
    const result = widgetsData.filter((widget) => widget.uuid !== widgetUUID);
    setWidgetsData(result);
  };

  const handleWidgetEdit = (widgetUUID) => {
    const editWidget = widgetsData.find((widget) => widget.uuid == widgetUUID);
    setEditWidgetData(editWidget);
    setActivePage("widget-edit");
  };

  return (
    <>
      <Reorder.Group as="div" axis="y" values={widgetsData} onReorder={setWidgetsData}>
        {widgetsData.map((widget) => {
          return (
            <Reorder.Item as="div" key={widget.uuid} value={widget} whileDrag={{ opacity: 0.4 }}>
              <WidgetItem>
                <Flex alignItems="center" justifyContent="space-between">
                  <Box>
                    <h3>{widget.name}</h3>
                  </Box>
                  <Box>
                    <IconButtonGroup>
                      <IconButton
                        onClick={() => handleWidgetEdit(widget.uuid)} // Düzenle butonuna tıklandığında yapılacak işlemler
                        label="Düzenle">
                        <Pencil />
                      </IconButton>
                      <IconButton
                        onClick={() => handleWidgetDelete(widget.uuid)} // Sil butonuna tıklandığında yapılacak işlemler
                        label="Sil">
                        <Trash />
                      </IconButton>
                    </IconButtonGroup>
                  </Box>
                </Flex>
              </WidgetItem>
            </Reorder.Item>
          );
        })}
      </Reorder.Group>
      <Box>
        <Flex alignItems="center" justifyContent="center">
          <Button variant="default" size="M" startIcon={<CheckCircle />} onClick={() => setActivePage("widget-create")}>
            Yeni Bölüm
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default WidgetListComponent;
