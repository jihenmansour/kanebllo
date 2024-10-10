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
    isVerified: boolean,
    verificationToken: string,
    verificationTokenExpiresAt: Date,
    _id: string,
    lastLogin: Date,
    createdAt: Date,
    updatedAt: Date,
}

export declare interface loginInterface{
    name: string,
    email: string,
    password: string
}