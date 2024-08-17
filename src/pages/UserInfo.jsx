import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useUserInfoStore } from "../stores/userInfoStore";
import { useEffect } from "react";
import { getUser } from "../crud/user";

const UserInfo = () => {
    const {
        name,
        date,
        country,
        phone,
        email,
    } = useUserInfoStore();

    useEffect(() => {
        getUser();
    }, [])

    return (
        <Stack>
            UserInfo
            <Box>{name}</Box>
            <Box>{date}</Box>
            <Box>{country}</Box>
            <Box>{phone}</Box>
            <Box>{email}</Box>
        </Stack>
    );
}

export default UserInfo;