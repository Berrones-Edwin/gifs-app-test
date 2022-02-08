import '@testing-library/jest-dom'
import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs'
describe('Tests in custom hooks useFetchGifs', () => {
  test('should show initials values ', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('hulk'))
    const { data, loading } = result.current

    await waitForNextUpdate()

    expect(data).toEqual([])
    expect(loading).toBe(true)
  })
  test('should return array 10 imgs', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('hulk'))

    await waitForNextUpdate()

    const { data, loading } = result.current

    expect(data.length).toBe(10)
    expect(loading).toBe(false)
  })
})
