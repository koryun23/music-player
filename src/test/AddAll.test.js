import renderer from "react-test-renderer";
import AddAll from "../components/toolbar/AddAll";

it('add all renders correctly', () => {
    const tree = renderer.create(<AddAll />).toJSON();
    expect(tree).toMatchSnapshot();
})

it('add all dropdown works correctly', () => {
    const component = renderer.create(<AddAll />);
    let tree = component.toJSON();
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