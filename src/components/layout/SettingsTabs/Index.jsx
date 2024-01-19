import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import InputField from '../../inputs/InputField';
import SelectField from '../../inputs/SelectField';
import Avatar from '../../layout/Avatar/Index'

export default function LabTabs({onChange,
  src}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Account" value="1" />
            <Tab label="Passwords" value="2" />
          </TabList>
        </Box>
        <TabPanel sx={{pt:'4rem'}} value="1">
            <Avatar/>
            <InputField
            name={"SettingFullName"}
            label={"Full Name:"}
            />
            <InputField
            name={"SettingEmailId"}
            label={"Email Id:"}
            />
            <InputField
            name={"SettingMobile"}
            label={"Mobile:"}
            placeholder={"(Optional)"}
            />
            <SelectField
            name={"SettingCountry"}
            label={"Country:"}
            />
        </TabPanel>
        <TabPanel  sx={{pt:'4rem'}}  value="2">
        <InputField
            name={"SettingOldPassword"}
            label={"Old Password:"}
            type={'password'}

            />
            <InputField
            name={"SettingNewPassword"}
            label={"New Password:"}
            type={'password'}
            />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
