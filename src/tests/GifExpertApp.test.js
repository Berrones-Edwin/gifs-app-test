import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import React from 'react'
import { GifExpertApp } from '../GifExpertApp'

describe('tests in zGifExpertApp />', () => {
  test('should show component successfully', () => {
    const wrapper = shallow(<GifExpertApp />)

    expect(wrapper).toMatchSnapshot()
})

test('should render a list categories', () => {
    const categories = ['random','other categorie']
    const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)
    
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGrid').length).toBe(categories.length)


  });
  
})
