import React from 'react'
import { shallow, mount } from 'enzyme'

import InfoModal from './info-modal'

describe('<InfoModal />', () => {
  it('renders without crashing', () => {
    shallow(<InfoModal />)
  })

  it('renders the modal', () => {
    const wrapper = shallow(<InfoModal />)
    expect(wrapper.hasClass('overlay')).toEqual(true)
  })
})
