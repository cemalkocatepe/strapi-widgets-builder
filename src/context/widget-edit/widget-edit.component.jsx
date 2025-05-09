import React, { useEffect, useState } from "react";
// Components
import { Box, Flex, IconButton, IconButtonGroup } from "@strapi/design-system";
import { Pencil } from "@strapi/icons";
import { TabItem } from "./widget-edit.styles";
import FormContentComponent from "./form-content/form-content.component";
import FormSettingsComponent from "./form-settings/form-settings.component";
// Store
import useWidgetStore from "../../store/useWidgetStore";

const TABS = {
  SETTINGS: "settings",
  CONTENT: "content",
};

const tabsMenu = [
  { id: TABS.SETTINGS, name: "Settings" },
  { id: TABS.CONTENT, name: "Content" },
];

const SettingsComponent = ({ widgetsData, setWidgetsData }) => (
  <>
    <FormSettingsComponent widgetsData={widgetsData} setWidgetsData={setWidgetsData} />
  </>
);

const ContentComponent = ({ widgetsData, setWidgetsData }) => (
  <>
    <FormContentComponent widgetsData={widgetsData} setWidgetsData={setWidgetsData} />
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
            <IconButton onClick={() => onSelect(tab.id)} label="Düzenle">
              <Pencil />
            </IconButton>
          </IconButtonGroup>
        </Box>
      </Flex>
    </TabItem>
  ));

const WidgetEditComponent = ({ widgetsData, setWidgetsData, onIsValidate }) => {
  const editWidgetData = useWidgetStore((state) => state.editWidgetData);
  const isValidate = useWidgetStore((state) => state.isValidate);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const editWidgetsData = widgetsData.map((widget) => {
      if (widget.uuid === editWidgetData.uuid) {
        return { ...widget, ...editWidgetData };
      }
      return widget;
    });
    setWidgetsData(editWidgetsData);
  }, [editWidgetData]);

  useEffect(() => {
    onIsValidate(isValidate);
  }, [isValidate]);

  const renderTabContent = () => {
    switch (activeTab) {
      case TABS.SETTINGS:
        return <SettingsComponent widgetsData={widgetsData} setWidgetsData={setWidgetsData} />;
      case TABS.CONTENT:
        return <ContentComponent widgetsData={widgetsData} setWidgetsData={setWidgetsData} />;
      default:
        return <TabSelector tabs={tabsMenu} onSelect={setActiveTab} />;
    }
  };

  return <>{renderTabContent()}</>;
};

export default WidgetEditComponent;
