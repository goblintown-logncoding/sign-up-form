import { Box, MenuItem, Select } from "@mui/material";

const MySelect = ({ handleOnChange, values, defaultValue }) => {
    return (
        <Box>
            <Select
                onChange={handleOnChange}
                defaultValue={defaultValue}
            >
                {values.map(({ value, title }) => (<MenuItem value={value}>{title}</MenuItem>))}
            </Select>
        </Box>
    );
}

export default MySelect;