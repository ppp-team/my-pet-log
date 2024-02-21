import { ImagesType } from "@/app/diary/_components/ImageInput";
import { atom } from "jotai";

export const diaryImagesAtom = atom<ImagesType[]>([]);

export const deletedImagesAtom = atom<number[]>([]);
