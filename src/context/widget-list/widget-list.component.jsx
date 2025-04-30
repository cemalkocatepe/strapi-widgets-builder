import React from "react";
// Components
import { Box, Button, Flex, IconButton, IconButtonGroup } from "@strapi/design-system";
import { Trash, Pencil, CheckCircle } from "@strapi/icons";
// Store
import usePageStore from "../../store/usePageStore";

const WidgetListComponent = ({ widgetsData }) => {
  const setActivePage = usePageStore((state) => state.setActivePage);

  return (
    <>
      {widgetsData.map((widget) => {
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
          </Box>
        );
      })}
      <Box display="flex" style={{ justifyContent: "center" }}>
        <Button variant="default" size="M" startIcon={<CheckCircle />} onClick={() => setActivePage("widget-create")}>
          Yeni Bölüm
        </Button>
      </Box>
    </>
  );
};

export default WidgetListComponent;
