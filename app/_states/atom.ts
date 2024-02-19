import { atom } from "jotai";

export const currentPetAtom = atom<string>("");

export const userAccessTokenAtom = atom(null);
export const userRefreshTokenAtom = atom(null);
export const isLoggedInAtom = atom(false);
