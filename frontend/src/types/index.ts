export declare interface floatingTriangleInterface{
    size: string,
    delay: number,
    left: string

}

export declare interface inputInterface{
    name: string,
    type?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>)=>void
}

export declare interface userInterface{
    name: string,
    email: string,
    password: string
}