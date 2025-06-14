'use client';

import { useState } from 'react'
import useWaterJug from "@/app/hooks/useWaterJug";
import Jug from "@/app/components/Jug";
import Controls from "@/app/components/Controls";
import SolutionSteps from "@/app/components/SolutionSteps";

export default function HomePage() {
  const [jugX, setJugX] = useState<number>(3)
  const [jugY, setJugY] = useState<number>(5)
  const [target, setTarget] = useState<number>(4)

  const { steps, solve, error, reset } = useWaterJug()

  const handleSolve = () => {
    solve(jugX, jugY, target)
  }

  const handleReset = () => {
    reset()
    setJugX(3)
    setJugY(5)
    setTarget(4)
  }

  return (
      <main className="min-h-screen py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Water Jug Problem Solver</h1>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-around mb-8 gap-4">
              <Jug capacity={jugX} current={steps[steps.length - 1]?.jugX || 0} name="Ємність X" />
              <Jug capacity={jugY} current={steps[steps.length - 1]?.jugY || 0} name="Ємність Y" />
            </div>

            <Controls
                jugX={jugX}
                jugY={jugY}
                target={target}
                onJugXChange={setJugX}
                onJugYChange={setJugY}
                onTargetChange={setTarget}
                onSolve={handleSolve}
                onReset={handleReset}
                hasSolution={steps.length > 0}
            />

            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
          </div>

          {steps.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <SolutionSteps steps={steps} />
              </div>
          )}
        </div>
      </main>
  )
}