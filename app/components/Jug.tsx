'use client'

interface JugProps {
    capacity: number
    current: number
    name: string
}

export default function Jug({ capacity, current, name }: JugProps) {
    const percentage = Math.min(100, (current / capacity) * 100)

    return (
        <div className="flex flex-col items-center">
            <div className="w-24 h-40 border-4 border-blue-500 rounded-b-lg relative overflow-hidden bg-blue-50">
                <div
                    className="absolute bottom-0 w-full bg-blue-400 transition-all duration-300"
                    style={{ height: `${percentage}%` }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-blue-800">
            {current}/{capacity}Л
          </span>
                </div>
            </div>
            <h3 className="mt-2 text-lg font-semibold">{name}</h3>
        </div>
    )
}