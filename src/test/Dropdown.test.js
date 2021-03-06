import Dropdown from '../components/Dropdown'
import React from 'react'
import { render } from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <Dropdown
      dropdownLinks={[
        { key: 'home', value: <a href="#!">Home</a>, hasSeparator: true },
        { key: 'about', value: <a href="#!">About</a> }
      ]}
    />,
    div
  )
})

test('dropdown snapshot', () => {
  const tree = renderer
    .create(
      <Dropdown
        dropdownLinks={[
          { key: 'home', value: <a href="#!">Home</a>, hasSeparator: true },
          { key: 'about', value: <a href="#!">About</a> }
        ]}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
