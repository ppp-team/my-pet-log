import { ImagesType } from "@/app/diary/_components/Input/ImageInput";
import { atom } from "jotai";

export const diaryImagesAtom = atom<ImagesType[]>([]);

export const deletedImagesAtom = atom<number[]>([]);

export const userAccessTokenAtom = atom(null);
export const userRefreshTokenAtom = atom(null);
export const isLoggedInAtom = atom(false);
