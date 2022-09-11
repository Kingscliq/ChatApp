
export interface Users {
    userId: string;
    name: string;
    messages: [{ title: string; createdAt: string }]
}[]

export interface Message {
    messageId: string, title: string, createdAt: Date, createdBy: string
}[]
