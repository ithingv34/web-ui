import React, { useState } from 'react'
import { 
    Box,
    Tabs,
    Tab
} from '@mui/material'
import WeatherGraph from '../WeatherGraph/WeatherGraph'


function TabPanel({children, value, index}){
    return (
        <div hidden={value !== index}>
            {value === index && <Box>{children}</Box>} 
        </div>
    )
}

function WeatherTab() {
    const [value, setValue] = useState(0)
    const handlerChange = (event, newValue) => {
        setValue(newValue)
    }
  return (
    <Box sx={{ width: "100%"}}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
            <Tabs 
                value={value}
                onChange={handlerChange}
                variant="fullWidth"   
            >
                <Tab label="날씨"/>
                <Tab label="습도"/>
                <Tab label="바람"/>
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <WeatherGraph/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            2
        </TabPanel>
        <TabPanel value={value} index={2}>
            3
        </TabPanel>
    </Box>
  )
}

export default WeatherTab