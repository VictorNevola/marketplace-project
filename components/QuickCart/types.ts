

export interface PropsQuickCart {
    isActive: Boolean,
    closeQuickCart: Function,
    infos: {
        name: string,
        description: string,
        oldPrice: number,
        newPrice: number
    }
    images: Array<{
        src: string,
        alt: string,
    }>
}