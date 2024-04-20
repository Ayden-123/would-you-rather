import { wyrArr } from '@/constants'
import React from 'react'
import { Badge } from "@/components/ui/badge"

const page = ({ params }: { params: { tag: string } }) => {
    let arr = wyrArr[params.tag];
    return (
        <div>
            <ul className="list-disc">
                {arr != null && arr.length > 0 ? (
                    <div>
                        {arr.map((item, idx) => (
                            <div className=''>
                                <li key={idx}
                                    className="mt-5">
                                    {item}
                                </li>
                                <div className='item-center flex'>
                                    <div><Badge className='bg-stone-100 text-stone-100'>kids</Badge></div>
                                    <div><Badge className='bg-stone-100 text-stone-100'>questions</Badge></div>
                                    <div><Badge className='bg-stone-100 text-stone-100'>would-you-rather</Badge></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="collection-empty">
                        <p className="p-20-semibold">Empty List</p>
                    </div>
                )}

            </ul>
        </div>
    )
}

export default page
