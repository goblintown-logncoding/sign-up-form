import { Stack, Typography } from "@mui/material";

const InputWithLabel = ({ title, inputComponent }) => {
    return (
        <Stack>
            <Typography>{title}</Typography>
            {inputComponent}
        </Stack>
    );
}

export default InputWithLabel;