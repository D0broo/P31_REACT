interface Step {
    jugX: number
    jugY: number
    action: string
}

export function solveWaterJugProblem(x: number, y: number, target: number): Step[] | null {
    if (target % gcd(x, y) !== 0 || target > Math.max(x, y)) {
        return null
    }

    const steps: Step[] = []
    let jugX = 0
    let jugY = 0

    const transfer = (from: 'X' | 'Y') => {
        if (from === 'X') {
            const amount = Math.min(jugX, y - jugY)
            jugX -= amount
            jugY += amount
            steps.push({
                jugX,
                jugY,
                action: `Transfer ${amount}L from X to Y`
            })
        } else {
            const amount = Math.min(jugY, x - jugX)
            jugY -= amount
            jugX += amount
            steps.push({
                jugX,
                jugY,
                action: `Transfer ${amount}L from Y to X`
            })
        }
    }

    while (jugX !== target && jugY !== target) {
        if (jugX === 0) {
            jugX = x
            steps.push({ jugX, jugY, action: `Fill X (${x}L)` })
        } else if (jugY === y) {
            jugY = 0
            steps.push({ jugX, jugY, action: 'Empty Y' })
        } else {
            transfer('X')
        }
    }

    return steps
}

function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b)
}