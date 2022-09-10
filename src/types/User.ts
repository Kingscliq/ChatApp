
export interface Users {
    userId: string;
    name: string;
    messages: [{ title: string; createdAt: string }]
}[]