import { getGifs } from '../../helpers/getGifs'

describe('test in file get gifs', () => {
  test('should return 10 elements', async () => {
    const gifs = await getGifs('hulk')

    expect(gifs.length).toBe(10)
  })
  test('should return 0 elements if there is not category', async () => {
    const gifs = await getGifs('')

    expect(gifs.length).toBe(0)
  })
})
