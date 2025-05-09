import React from "react";
import { Reorder } from "motion/react";
import { v4 as uuidv4 } from "uuid";
// Components
import { Box, Flex, IconButton, IconButtonGroup } from "@strapi/design-system";
import { Trash, Pencil, Plus } from "@strapi/icons";
import { Item } from "./form-repeat.styles";

import widgetsSchema from "../../../components/widgets/widget-schema";

const FormRepeatComponent = ({ name, /* formType, */ editWidgetData, setEditWidgetData /* field */ }) => {
  const handleOrderItems = (result) => {
    setEditWidgetData({ ...editWidgetData, data: { ...editWidgetData.data, [name]: result } });
  };

  const handleWidgetItemDelete = (widgetUUID) => {
    const result = editWidgetData.data[name].filter((widget) => widget.uuid !== widgetUUID);
    setEditWidgetData({ ...editWidgetData, data: { ...editWidgetData.data, [name]: result } });
  };

  const handleWidgetItemEdit = (widgetUUID) => {
    console.log("handleWidgetItemEdit", widgetUUID);
  };

  const handleWidgetItemAdd = (widgetId) => {
    const widgetItemSchema = widgetsSchema[widgetId].content[name].fields;
    const itemValue = {};
    Object.entries(widgetItemSchema).map(([key]) => {
      itemValue[key] = "";
    });
    const item = {
      uuid: uuidv4(),
      ...itemValue,
    };

    setEditWidgetData({ ...editWidgetData, data: { ...editWidgetData.data, [name]: [...editWidgetData.data[name], item] } });
  };

  return (
    <>
      <Reorder.Group as="div" axis="y" values={editWidgetData.data[name]} onReorder={handleOrderItems}>
        {editWidgetData.data[name].map((item, index) => {
          return (
            <Reorder.Item as="div" key={item.uuid} value={item} whileDrag={{ opacity: 0.4 }}>
              <Item>
                <Flex alignItems="center" justifyContent="space-between">
                  <Box>
                    <h3>
                      {name} - {index}
                    </h3>
                  </Box>
                  <Box>
                    <IconButtonGroup>
                      <IconButton
                        onClick={() => handleWidgetItemEdit(item.uuid)} // Düzenle butonuna tıklandığında yapılacak işlemler
                        label="Düzenle">
                        <Pencil />
                      </IconButton>
                      <IconButton
                        onClick={() => handleWidgetItemDelete(item.uuid)} // Sil butonuna tıklandığında yapılacak işlemler
                        label="Sil">
                        <Trash />
                      </IconButton>
                    </IconButtonGroup>
                  </Box>
                </Flex>
              </Item>
            </Reorder.Item>
          );
        })}
      </Reorder.Group>
      <Flex alignItems="center" justifyContent="center">
        <IconButton
          variant="secondary"
          onClick={() => handleWidgetItemAdd(editWidgetData.id)} // Düzenle butonuna tıklandığında yapılacak işlemler
          label="Ekle">
          <Plus />
        </IconButton>
      </Flex>
    </>
  );
};

export default FormRepeatComponent;
