import React from 'react'

const Message = () => {
    return (
        <section className='bg-primary text-gray-100 font-medium w-[60%] rounded-lg m-3 px-2 py-2 flex flex-col'>
            <small className='text-xs'>Username</small>
            <p>This is a sample message</p>
            <div className='flex items-center justify-between'>
                <div></div>
                <div>
                    <small className='text-xs text-slate-200'>Date</small>
                </div>
            </div>

        </section>
    )
}

export default Message