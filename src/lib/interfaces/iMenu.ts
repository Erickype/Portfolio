export interface IMenu{
    id: string
    menuName: string
    menuUrl: string
}

export interface IMenuContents{
    id: string,
    titleContent: string,
    bodyContent: string,
    actionContent: string
}

export interface IMoreAboutContent{
    id: string,
    projectName: string,
    description: string,
    url: URL,
    image: ImageData,
    mainContentId: string
}