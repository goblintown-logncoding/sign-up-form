import { Box, Card, CardContent, Typography, TextField, Stack, Input } from "@mui/material";
import InputWithLabel from "../components/InputWithLabel";
import MySelect from "../components/MySelect";
import {getCodes, getName} from "country-list";
import { useLocation } from "react-router-dom";

const SignUpForm = () => {
    const location = useLocation();
    console.log(location.pathname);
    console.log(location.search);

    const getCountryNameWithCode = () => {
        const codeList = getCodes();
        return codeList.map((code) => ({ title: getName(code), value: code})); 
    }
    const handleOnChange = (e) => {
        console.log(e.target.value);
    }
    return (
        <Box>
            <Card
                sx={{
                    padding: "40px"
                }}
            >
                <CardContent>
                    <Stack
                        gap="30px"
                    >
                        <Typography sx={{ fontSize: "40px"}} variant="h5">Sign Up Form</Typography>
                        <InputWithLabel
                            title="Name"
                            inputComponent={
                                <TextField
                                    sx={{
                                        width: "100%"
                                    }}
                                    variant="outlined"
                                />
                            }
                        />

                        <InputWithLabel
                            title="Date"
                            inputComponent={<input type="date" />}
                        />

                        <InputWithLabel
                            title="Country"
                            inputComponent={
                                <MySelect
                                    defaultValue="KR"
                                    values={getCountryNameWithCode()}
                                />
                            }
                        />
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    )
}

export default SignUpForm;