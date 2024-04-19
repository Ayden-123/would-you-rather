import { wyrArr } from '@/constants'
import React from 'react'

const page = ({ params }: { params: { tag: string } }) => {
    let arr = wyrArr[params.tag];
    return (
        <div>
            <ul className="list-disc">
                {arr != null && arr.length > 0 ? (
                    <div>
                        {arr.map((item, idx) => (
                            <li key={idx}
                                className="mt-5">
                                {item}
                            </li>
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
