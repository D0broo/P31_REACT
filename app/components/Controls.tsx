'use client'

import { ChangeEvent } from 'react'

interface ControlsProps {
    jugX: number
    jugY: number
    target: number
    onJugXChange: (value: number) => void
    onJugYChange: (value: number) => void
    onTargetChange: (value: number) => void
    onSolve: () => void
    onReset: () => void
    hasSolution: boolean
}

export default function Controls({
                                     jugX,
                                     jugY,
                                     target,
                                     onJugXChange,
                                     onJugYChange,
                                     onTargetChange,
                                     onSolve,
                                     onReset,
                                     hasSolution
                                 }: ControlsProps) {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>, handler: (value: number) => void) => {
        const value = parseInt(e.target.value)
        if (!isNaN(value) && value > 0) {
            handler(value)
        }
    }

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Jug X Capacity (L)</label>
                    <input
                        type="number"
                        min="1"
                        value={jugX}
                        onChange={(e) => handleInputChange(e, onJugXChange)}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Jug Y Capacity (L)</label>
                    <input
                        type="number"
                        min="1"
                        value={jugY}
                        onChange={(e) => handleInputChange(e, onJugYChange)}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Target Volume (L)</label>
                    <input
                        type="number"
                        min="1"
                        value={target}
                        onChange={(e) => handleInputChange(e, onTargetChange)}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>
            <div className="flex gap-4">
                <button
                    onClick={onSolve}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition shadow-md"
                >
                    Solve
                </button>
                {hasSolution && (
                    <button
                        onClick={onReset}
                        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded transition shadow-md"
                    >
                        Reset
                    </button>
                )}
            </div>
        </div>
    )
}