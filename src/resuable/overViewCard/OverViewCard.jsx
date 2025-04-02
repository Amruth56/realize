"use client"

export default function OverViewCard({title, value, percentage, icon, subtext}){
    return(
        <div className=" flex flex-col p-4 bg-white rounded-lg shadfow-lg w-64"> 
            
            <div className="flex justify-between items-center">
                <div className="terxt-sm font-semibold text-gray-900">{title}</div>
                <div className="text-xl font-bold text-gray-900">{icon}</div>
            </div>
            <div className="my-4 text-2xl font-semibold text-gray-900"> {value}</div>
            <div className="text-sm text-green-500">{percentage}</div>
            {subtext && <div className="text-xs text-gray-500">{subtext}</div>}
        </div>
    )
}

