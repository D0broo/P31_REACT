'use client'

interface Step {
    jugX: number
    jugY: number
    action: string
}

interface SolutionStepsProps {
    steps: Step[]
}

export default function SolutionSteps({ steps }: SolutionStepsProps) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Step</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jug X</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jug Y</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {steps.map((step, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{step.jugX}L</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{step.jugY}L</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{step.action}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}