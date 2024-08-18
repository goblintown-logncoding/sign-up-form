import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { getUser } from "../crud/user";

const UserInfo = () => {
    const [name, setName] = useState();
    const [country, setCountry] = useState();
    const [date, setDate] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

    useEffect(() => {
        getUser()
            .then((data) => {
                setName(data.name);
                setCountry(data.country);
                setDate(data.date);
                setEmail(data.email);
                setPhone(data.Phone);
            });
    }, [])

    return (
        <Stack>
            UserInfo
            <Box>{name}</Box>
            <Box>{country}</Box>
            <Box>{date}</Box>
            <Box>{email}</Box>
            <Box>{phone}</Box>
        </Stack>
    );
}

export default UserInfo;