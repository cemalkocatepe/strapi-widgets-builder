import React from "react";
import { Box, Flex, IconButton, Typography } from "@strapi/design-system";
import { Cross } from "@strapi/icons";
import usePageStore from "../../store/usePageStore";

function HeaderComponent() {
  const goToBack = usePageStore((state) => state.goToBack);
  const prevPage = usePageStore((state) => state.prevPage);

  return (
    <Box
      style={{
        display: "flex",
        height: "52px",
        backgroundColor: "#fff",
        padding: "10px 20px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}>
      <Flex alignItems="center" justifyContent="space-between" width={"100%"}>
        <Typography variant="beta">Header</Typography>
        {prevPage.length > 0 && (
          <IconButton onClick={() => goToBack()} label="Geri">
            <Cross />
          </IconButton>
        )}
      </Flex>
    </Box>
  );
}

export default HeaderComponent;
