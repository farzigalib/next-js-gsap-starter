'use server'

import { dynamicBlurDataUrl } from "@/util/dynamicBlurDataUrl";

export async function getImageWithBlurURL(array: string[]) {
    const images = await Promise.all(array.map(async (element) => {
        const blurURL = await dynamicBlurDataUrl(element);
        const newElement = {
            imgUrl: element,
            blurUrl: blurURL
        };
        return newElement;
    }));

    return images;
}
