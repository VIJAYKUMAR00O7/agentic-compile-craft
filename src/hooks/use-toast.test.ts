import { describe, it, expect } from 'vitest'
import { reducer } from './use-toast'

describe('toast reducer', () => {
  it('adds a toast', () => {
    const initial = { toasts: [] as any[] }
    const toast = { id: '1', title: 'hi', open: true }
    const state = reducer(initial, { type: 'ADD_TOAST', toast })
    expect(state.toasts).toEqual([toast])
  })

  it('updates a toast', () => {
    const initial = { toasts: [{ id: '1', title: 'first', open: true }] }
    const state = reducer(initial, { type: 'UPDATE_TOAST', toast: { id: '1', title: 'updated' } })
    expect(state.toasts[0]).toMatchObject({ id: '1', title: 'updated', open: true })
  })

  it('dismisses a toast', () => {
    const initial = { toasts: [{ id: '1', title: 'x', open: true }] }
    const state = reducer(initial, { type: 'DISMISS_TOAST', toastId: '1' })
    expect(state.toasts[0].open).toBe(false)
  })

  it('removes a toast', () => {
    const initial = { toasts: [
      { id: '1', open: false },
      { id: '2', open: true }
    ] }
    const state = reducer(initial, { type: 'REMOVE_TOAST', toastId: '1' })
    expect(state.toasts).toEqual([{ id: '2', open: true }])
  })
})
