import React from "react";
import { Box, Flex, IconButton, Typography } from "@strapi/design-system";
import { Cross } from "@strapi/icons";
import usePageStore from "../../store/usePageStore";

function HeaderComponent() {
  const setActivePage = usePageStore((state) => state.setActivePage);
  const prevPage = usePageStore((state) => state.prevPage);

  return (
    <Box
      style={{
        backgroundColor: "#fff",
        padding: "10px 20px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}>
      <Flex alignItems="center" justifyContent="space-between">
        <Typography variant="beta" as="h1" fontWeight="bold">
          Header
        </Typography>
        <IconButton onClick={() => setActivePage(prevPage)} label="Geri" icon={<Cross />} />
      </Flex>
    </Box>
  );
}

export default HeaderComponent;
