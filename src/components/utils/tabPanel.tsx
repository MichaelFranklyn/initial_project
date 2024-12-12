import { Box } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
  intercomDataSet?: string;
}

export function TabPanel(props: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={props.value !== props.index}
      id={`full-width-tabpanel-${props.index}`}
      aria-labelledby={`full-width-tab-${props.index}`}
      data-intercom-target={props.intercomDataSet}
    >
      {props.value === props.index && <Box>{props.children}</Box>}
    </div>
  );
}
