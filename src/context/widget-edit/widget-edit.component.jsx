import React, { useEffect, useState } from "react";
import { Box, Button, Flex, IconButton, IconButtonGroup } from "@strapi/design-system";
import { Pencil, CheckCircle } from "@strapi/icons";
import FormContentComponent from "./form-content/form-content.component";
import FormSettingsComponent from "./form-settings/form-settings.component";
import { TabItem } from "./widget-edit.styles";
import usePageStore from "../../store/usePageStore";
import useWidgetStore from "../../store/useWidgetStore";

const TABS = {
  SETTINGS: "settings",
  CONTENT: "content",
};

const tabsMenu = [
  { id: TABS.SETTINGS, name: "Settings" },
  { id: TABS.CONTENT, name: "Content" },
];

const SettingsComponent = ({ widgetsData, setWidgetsData, handleContinue }) => (
  <>
    <FormSettingsComponent widgetsData={widgetsData} setWidgetsData={setWidgetsData} />
    <Box style={{ padding: "12px" }}>
      <Flex alignItems="center" justifyContent="flex-end">
        <Button variant="default" size="M" startIcon={<CheckCircle />} onClick={handleContinue}>
          Devam Et
        </Button>
      </Flex>
    </Box>
  </>
);

const ContentComponent = ({ widgetsData, setWidgetsData, handleContinue }) => (
  <>
    <FormContentComponent widgetsData={widgetsData} setWidgetsData={setWidgetsData} />
    <Box style={{ padding: "12px" }}>
      <Flex alignItems="center" justifyContent="flex-end">
        <Button variant="default" size="M" startIcon={<CheckCircle />} onClick={handleContinue}>
          Devam Et
        </Button>
      </Flex>
    </Box>
  </>
);

const TabSelector = ({ tabs, onSelect }) =>
  tabs.map((tab) => (
    <TabItem key={tab.id}>
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <h3>{tab.name}</h3>
        </Box>
        <Box>
          <IconButtonGroup>
            <IconButton onClick={() => onSelect(tab.id)} label="Düzenle" icon={<Pencil />} />
          </IconButtonGroup>
        </Box>
      </Flex>
    </TabItem>
  ));

const WidgetEditComponent = ({ widgetsData, setWidgetsData, onIsValidate }) => {
  const setActivePage = usePageStore((state) => state.setActivePage);
  const activeWidgetData = useWidgetStore((state) => state.activeWidgetData);
  const isValidate = useWidgetStore((state) => state.isValidate);
  const [activeTab, setActiveTab] = useState("");

  const handleContinue = () => setActivePage("widget-list");

  useEffect(() => {
    const editWidgetsData = widgetsData.map((widget) => {
      if (widget.uuid === activeWidgetData.uuid) {
        return { ...widget, ...activeWidgetData };
      }
      return widget;
    });
    setWidgetsData(editWidgetsData);
  }, [activeWidgetData]);

  useEffect(() => {
    onIsValidate(isValidate);
  }, [isValidate]);

  const renderTabContent = () => {
    switch (activeTab) {
      case TABS.SETTINGS:
        return <SettingsComponent widgetsData={widgetsData} setWidgetsData={setWidgetsData} handleContinue={handleContinue} />;
      case TABS.CONTENT:
        return <ContentComponent widgetsData={widgetsData} setWidgetsData={setWidgetsData} handleContinue={handleContinue} />;
      default:
        return <TabSelector tabs={tabsMenu} onSelect={setActiveTab} />;
    }
  };

  return <>{renderTabContent()}</>;
};

export default WidgetEditComponent;
