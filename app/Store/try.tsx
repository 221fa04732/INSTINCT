import { atom } from "recoil";

export const tryatom = atom<number>({
    key : "hello",
    default : 0
})