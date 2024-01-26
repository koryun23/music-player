import renderer from "react-test-renderer";
import PlayAll from "../components/toolbar/PlayAll";

it('renders correctly', () => {
    const component = renderer.create(<PlayAll />)
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

it('play all dropdown works correctly', () => {
    const component = renderer.create(<PlayAll />)
    let tree = component.toJSON();
    console.log(tree.props);
    renderer.act(() => {
        tree.props.onClick();
    })
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    renderer.act(() => {
        tree.props.onClick();
    })
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})