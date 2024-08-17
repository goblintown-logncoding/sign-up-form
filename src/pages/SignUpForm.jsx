import { Box, Card, CardContent, Typography, TextField, Stack, Input, CardActions, Button } from "@mui/material";
import InputWithLabel from "../components/InputWithLabel";
import MySelect from "../components/MySelect";
import {getCodes, getName} from "country-list";
import { useLocation } from "react-router-dom";
import { useUserInfoStore } from "../stores/userInfoStore";
import { setUser } from "../crud/user";

const SignUpForm = () => {
    const { 
        name,
        date,
        country,
        phone,
        email,
        setUserInfo
    } = useUserInfoStore();

    const getCountryNameWithCode = () => {
        const codeList = getCodes();
        return codeList.map((code) => ({ title: getName(code), value: code})); 
    }
    const handleOnNameChange = (e) => {
        console.log(e.target.value);
        const inputValue = e.target.value;
        setUserInfo({
            name: inputValue,
            date,
            country,
            phone,
            email
        });
    }
    const handleOnDateChange = (e) => {
        console.log(e.target.value);
        setUserInfo({
            name,
            date: e.target.value,
            country,
            phone,
            email
        });
    }
    const handleOnCountryChange = (e) => {
        console.log(e.target.value);
        setUserInfo({
            name,
            date, 
            country: e.target.value,
            phone,
            email
        })
    }
    const handleOnPhoneChange = (e) => {
        console.log(e.target.value);
        setUserInfo({
            name,
            date,
            country,
            phone:e.target.value,
            email
        })
 
    }
    const handleOnEmailChange = (e) => {
        setUserInfo({
            name,
            date,
            country,
            phone,
            email: e.target.value
        })
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
                                    onChange={handleOnNameChange}
                                />
                            }
                        />

                        <InputWithLabel
                            title="Date"
                            inputComponent={
                                <input
                                    style={{ height: "60px"}}
                                    type="date"
                                    onChange={handleOnDateChange}
                                />
                            }
                        />

                        <InputWithLabel
                            title="Country"
                            inputComponent={
                                <MySelect
                                    defaultValue="KR"
                                    values={getCountryNameWithCode()}
                                    handleOnChange={handleOnCountryChange}
                                />
                            }
                        />

                        <InputWithLabel
                            title="Phone"
                            inputComponent={
                                <TextField
                                    variant="outlined"
                                    onChange={handleOnPhoneChange}
                                />
                            }
                        />

                        <InputWithLabel
                            title="Email"
                            inputComponent={
                                <TextField
                                    variant="outlined"
                                    onChange={handleOnEmailChange}
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
                            onClick={() => {
                                console.log(name);
                                console.log(date);
                                console.log(country);
                                console.log(phone);
                                console.log(email);
                                setUser({
                                    name,
                                    date,
                                    country,
                                    phone,
                                    email
                                })
                            }}
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