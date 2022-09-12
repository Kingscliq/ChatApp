import React, { useMemo } from 'react'
import { useMessages } from '../../hooks/useMessage'
import { getDateTime } from '../../utils/formatters'
import Message from '../elements/Message'
const Messages = () => {

    const { messages } = useMessages()

    console.log(messages)
    const sortedMessages = useMemo(() => [...messages].sort((a: any, b: any) => a.createdAt - b.createdAt), [messages]);
    const sessionId = useMemo(() => sessionStorage.getItem('sessionId'), [])

    console.log(sortedMessages)
    return (
        <section>
            {sortedMessages.map((message) => (
                <Message date={getDateTime(message.createdAt as any)} username={message.createdByName} title={message.title} order={message.createdBy === sessionId ? "1" : "2"} />
            ))}
            {messages.length < 1 && (<div className='flex items-center justify-center'><p className='text-gray-400'>No Messages to Display, Start Chat..😇 </p></div>)}
        </section>
    )
}

export default Messages