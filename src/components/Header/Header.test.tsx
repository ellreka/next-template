import renderer from 'react-test-renderer'

import { Header } from './Header'
describe('MainTitle', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Header foo="hhhhhhhhaaa" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
