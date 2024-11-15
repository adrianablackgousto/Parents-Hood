import type { Meta, StoryObj } from '@storybook/react'
import { HomePage } from './HomePage'

const meta: Meta = {
    title: 'Example/HomePage',
		component: HomePage,
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        text: { control: 'text' },
    },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        text: 'This is the default text',
    },
}