import { create } from "zustand";

// const useStore = create((set) => ({
//     count: 1,
//     inc: () => set((state) => ({ count: state.count + 1 })),
//   }))

export const useUserInfoStore = create((set) => ({
    name: null,
    date: null,
    country: "KR",
    phone: null,
    email: null,
    setUserInfo: ({ name, date, country, phone, email }) => set((preState) => {
        return ({
        ...preState,
        name,
        date,
        country,
        phone,
        email,
    })})
}));