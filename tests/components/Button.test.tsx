import { expect, describe, it} from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from '../../lib/components/button/Button'

describe('<Button/>', () => {
    it('should render the button', () => {
        render(<Button label='Click Me'/>)
        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.getByRole('button')).toHaveTextContent('Click Me')
        expect(screen.getByRole('button')).toHaveClass('text-white')
    })
})