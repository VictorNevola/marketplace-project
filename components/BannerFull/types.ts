interface ImageProps {
    src: string,
    alt: string,
}

export interface PropsBanner {
    images: Array<ImageProps>,
    arrowsActive: boolean,
    fullWidth: boolean,
}