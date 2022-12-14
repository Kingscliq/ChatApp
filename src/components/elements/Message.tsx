import React from 'react'
import { BiCheckDouble } from 'react-icons/bi'

interface MessageProp {
    order: string;
    title: string;
    username: string;
    date: string
}

const Message: React.FC<MessageProp> = ({ order, title, username, date }) => {
    return (
        <section className={`flex items-center justify-between gap-4  ${order == "2" ? "flex-row-reverse" : null}`}>
            <section className={`text-gray-100 font-medium lg:w-[60%] w-full rounded-lg m-3 px-2 py-2 flex flex-col ${order == "1" ? "bg-primary order-1" : "  bg-gray-200 text-black order-2"}`}>
                <div className='mb-2'>
                    <small className='text-xs text-[#DB803B]'>{username}</small>
                </div>
                <p>{title}</p>
                <div className='flex items-center justify-between'>
                    <div></div>
                    <div className='flex items-center'>
                        <small className={`text-xs  ${order == "1" ? " text-slate-200" : "text-gray-600"}`}>{date}</small> <span><BiCheckDouble /></span>
                    </div>
                </div>
            </section>
            <section></section>
        </section>

    )
}

export default Message