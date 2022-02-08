import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import React from 'react'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('test in component <GifGrid />', () => {
  test('should show component successfully', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })
    const wrapper = shallow(<GifGrid category={'hulk'} />)

    expect(wrapper).toMatchSnapshot()
  })
  test('should show images when use custom hook useFetchGifs', () => {

    const mockData = [
      {
        id: 'ABC',
        url: 'https://localhost/cualquier/cosa',
        title: 'my title'
      }
    ]
    useFetchGifs.mockReturnValue({
      data: mockData,
      loading: false
    })
    const wrapper = shallow(<GifGrid category={'hulk'} />)

    // expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('p').exists()).toBe(false)
    expect(wrapper.find('GifGridItem').length).toBe(mockData.length)
  })
})
