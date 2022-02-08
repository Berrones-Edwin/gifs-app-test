import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import React from 'react'
import { GifGridItem } from '../../components/GifGridItem'

describe('Test component <GifGridItem/>', () => {
  let title = ''
  let url = ''
  let wrapper = shallow(<GifGridItem title={title} url={url} />)
  beforeEach(() => {
    title = 'My title'
    url =
      'https://images.pexels.com/photos/10162332/pexels-photo-10162332.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    wrapper = shallow(<GifGridItem title={title} url={url} />)
  })

  test('should component in screen', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Should image has url and alt', () => {
    const img = wrapper.find('img')
    const { src, alt } = img.props()
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('should componet has a title', () => {
    const _title = wrapper.find('p').text().trim()

    expect(_title).toBe(title)
  })

  test('should has the class animate__fadeIn', () => {
    const div = wrapper.find('div')
    const hasClassDiv = div.props().className.includes('animate__fadeIn')
    expect(hasClassDiv).toBe(true)
  })
})
