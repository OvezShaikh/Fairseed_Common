import * as React from 'react';
import { useState , useRef } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import InputField from '../../inputs/InputField';
import SelectField from '../../inputs/SelectField';
import CountrySelect from '../../inputs/countrySelect/index';
import Avatar from '../../layout/Avatar/Index'
import { Formik, Form , useFormikContext } from 'formik';
import { SlPencil } from "react-icons/sl";
import { useCreateOrUpdate } from '../../../Hooks/useCreateOrUpdate';
import { useGetAll } from '../../../Hooks/useGetAll';







const InputStyle =
{
  padding: '20px', border: "1px solid #e2e2e2",
  // },
  "&:focus-within": {
    boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.15);`,
    borderColor: "black",
  },

}
const SelectStyle =
{
  padding: '0px', border: "none",
  // },
  "&:focus-within": {
    boxShadow: `none`,
    borderColor: "none",
  },

}

const initialValues={
  full_name:"",
  email:"",
  m_number:0,
  Country:""
}

export default function LabTabs() {

  const [user,setUser] = useState({});
  
  const imgRef = useRef(null);

  

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [age, setAge] = React.useState('');

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example"   >
            <Tab label="Account" value="1"  className='account-tab' />
            <Tab label="Passwords" value="2" className='password-tab' />
          </TabList>
        </Box>
        <TabPanel sx={{ pt: '4rem',color:"green" }} value="1">
          <Formik
          initialValues={initialValues}
         
          >{(value,setFieldValue)=>(

         
            <Form>

            <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: '150px', height: '150px', position: 'relative' }}>
                <input
                  type='file'
                  hidden
                  ref={imgRef}
                  sx={{ padding: ' 16px 10px 16px var(--Spacing-20, 20px)', border: '2px solid var(--Linear-BG, #FF9F0A)', borderRadius: '4px' }}
                 
                  name='image'
                  onChange={(event) => setFieldValue('image', event.target.files[0])}
                  
                />

                <div style={{ position: 'absolute', bottom: '0', right: '48px', zIndex: 1 }}>
                  <button onClick={() => imgRef.current.click()}>
                    <SlPencil />
                  </button>
                </div>
              </Avatar>
              <InputField
                name={"username"}
                label={"Full Name:"}
                sx={InputStyle}
              />
              <InputField
                name={"email"}
                label={"Email Id:"}
                sx={InputStyle}
              />
              <InputField
                name={"mobile_number"}
                label={"Mobile:"}
                placeholder={"(Optional)"}
                sx={InputStyle}

              />
              <div className='country-select-div'>
              <CountrySelect label="Country:"
              name={"country"}
              sx={SelectStyle}

              
              
              />

            </div>


            

            

              
            </Form>
             )}
          </Formik>
        </TabPanel>
        <TabPanel sx={{ pt: '4rem' }} value="2">
          <Formik>
            <Form>
              <InputField
                name={"SettingOldPassword"}
                label={"Old Password:"}
                type={'password'}
                sx={InputStyle}


              />
              <InputField
                name={"SettingNewPassword"}
                label={"New Password:"}
                type={'password'}
                sx={InputStyle}

              />
            </Form>
          </Formik>


        </TabPanel>
      </TabContext>
    </Box>
  );
}
