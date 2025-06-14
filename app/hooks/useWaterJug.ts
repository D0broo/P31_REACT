'use client'

import { useState } from 'react'
import {solveWaterJugProblem} from "@/app/utils/waterJugSolver";

interface Step {
    jugX: number
    jugY: number
    action: string
}

export default function useWaterJug() {
    const [steps, setSteps] = useState<Step[]>([])
    const [error, setError] = useState<string | null>(null)

    const solve = (jugX: number, jugY: number, target: number) => {
        setError(null)

        if (target <= 0) {
            setError('Цільовий обʼєм має бути більшим за 0')
            return
        }

        if (target > Math.max(jugX, jugY)) {
            setError(`Цільовий обʼєм не може бути більшим за ${Math.max(jugX, jugY)}л`)
            return
        }

        const solution = solveWaterJugProblem(jugX, jugY, target)

        if (solution === null) {
            setError('Розвʼязок для даних параметрів неможливий')
            setSteps([])
        } else {
            setSteps(solution)
        }
    }

    const reset = () => {
        setSteps([])
        setError(null)
    }

    return { steps, solve, error, reset }
}