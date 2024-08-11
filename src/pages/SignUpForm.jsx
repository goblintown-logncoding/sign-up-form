import { Box, Card, CardContent, Typography, TextField, Stack, Input, CardActions, Button } from "@mui/material";
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
                            inputComponent={
                                <input
                                    style={{ height: "60px"}}
                                    type="date"
                                />
                            }
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

                        <InputWithLabel
                            title="Phone"
                            inputComponent={
                                <TextField
                                    variant="outlined"
                                />
                            }
                        />

                        <InputWithLabel
                            title="Email"
                            inputComponent={
                                <TextField
                                    variant="outlined"
                                />
                            }
                        />

                    </Stack>
                </CardContent>
                <CardActions>
                    <Box
                        width="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Button
                            fullWidth
                            variant="contained"
                        >
                            Sign Up
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    )
}

export default SignUpForm;