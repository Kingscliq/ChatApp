import React, { useMemo } from 'react'
import { useMessages } from '../../hooks/useMessage'
import Message from '../elements/Message'
const Messages = () => {

    const { messages } = useMessages()

    console.log(messages)
    const sortedMessages = useMemo(() => [...messages].sort((a: any, b: any) => a.createdAt - b.createdAt), [messages]);

    // eslint-disable-next-line react-hooks/exhaustive-deps

    console.log(sortedMessages)
    return (
        <section>
            {sortedMessages.map((message) => (
                <Message />
            ))}
        </section>
    )
}

export default Messages