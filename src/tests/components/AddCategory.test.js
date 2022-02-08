import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import React from 'react'
import { AddCategory } from '../../components/AddCategory'
describe('test in component <AddCAtegory />', () => {
  const setCategories = jest.fn()
  let wrapper = shallow(<AddCategory setCategories={setCategories} />)

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={setCategories} />)
  })

  test('should show component successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should change el value in input', () => {
    const inputText = wrapper.find('input')

    const value = 'hello world'

    inputText.simulate('change', {
      target: {
        value
      }
    })
    const paragraph = wrapper.find('p').text().trim()
    expect(paragraph).toBe(value)
  })
  test('should not send the info', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} })
    expect(setCategories).not.toHaveBeenCalled()
  })

  test('should call setCategories method and clean input txt', () => {
    const value = 'hola mundo'
    wrapper.find('input').simulate('change', {
      target: { value }
    })

    wrapper.find('form').simulate('submit', { preventDefault() {} })

    expect(setCategories).toHaveBeenCalled()
    expect(setCategories).toHaveBeenCalledTimes(1) //se haya llamando una vez
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

    expect(wrapper.find('input').props().value).toBe('')
  })
})
