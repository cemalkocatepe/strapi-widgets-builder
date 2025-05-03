import React, { useState, useEffect } from "react";
import { Reorder } from "motion/react";
// Components
import { Box, Button, Flex, IconButton, IconButtonGroup } from "@strapi/design-system";
import { Trash, Pencil, CheckCircle } from "@strapi/icons";
import { WidgetItem } from "./widget-list.styles";
// Store
import usePageStore from "../../store/usePageStore";

const WidgetListComponent = ({ widgetsData }) => {
  const setActivePage = usePageStore((state) => state.setActivePage);
  const [valueWidgetsData, setValueWidgetsData] = useState(widgetsData);

  useEffect(() => {
    console.log(valueWidgetsData);
  }, [valueWidgetsData]);

  return (
    <>
      <Reorder.Group as="div" axis="y" values={valueWidgetsData} onReorder={setValueWidgetsData}>
        {valueWidgetsData.map((widget) => {
          return (
            <Reorder.Item as="div" key={widget.id} value={widget} whileDrag={{ opacity: 0.4 }}>
              <WidgetItem>
                <Flex alignItems="center" justifyContent="space-between">
                  <Box>
                    <h3>{widget.name}</h3>
                  </Box>
                  <Box>
                    <IconButtonGroup>
                      <IconButton
                        onClick={() => alert("Düzenle tıklandı! ID:" + widget.id)} // Düzenle butonuna tıklandığında yapılacak işlemler
                        label="Düzenle"
                        icon={<Pencil />}
                      />
                      <IconButton
                        onClick={() => alert("Sil tıklandı! ID:" + widget.id)} // Düzenle butonuna tıklandığında yapılacak işlemler
                        label="Sil"
                        icon={<Trash />}
                      />
                    </IconButtonGroup>
                  </Box>
                </Flex>
              </WidgetItem>
            </Reorder.Item>
          );
        })}
      </Reorder.Group>
      <Box display="flex" style={{ justifyContent: "center" }}>
        <Button variant="default" size="M" startIcon={<CheckCircle />} onClick={() => setActivePage("widget-create")}>
          Yeni Bölüm
        </Button>
      </Box>
    </>
  );
};

export default WidgetListComponent;
