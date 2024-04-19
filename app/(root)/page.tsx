import Sidebar from '@/components/shared/Sidebar'
import { wyrArr } from '@/constants';
import React, { useContext } from 'react'

const Page = async () => {
  let arr = wyrArr["all"];
    return (
        <div>
            <ul className="list-disc ">
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

export default Page