import React from "react";
import { Box, Button, Flex } from "@strapi/design-system";
import { CheckCircle } from "@strapi/icons";
import FormBuilderComponent from "./form-builder/form-builder.component";
import usePageStore from "../../store/usePageStore";

const WidgetEditComponent = ({ widgetsData, setWidgetsData }) => {
  const setActivePage = usePageStore((state) => state.setActivePage);

  return (
    <>
      <FormBuilderComponent widgetsData={widgetsData} setWidgetsData={setWidgetsData} />
      <Box style={{ padding: "12px" }}>
        <Flex alignItems="center" justifyContent="flex-end">
          <Button variant="default" size="M" startIcon={<CheckCircle />} onClick={() => setActivePage("widget-list")}>
            Devam Et
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default WidgetEditComponent;
