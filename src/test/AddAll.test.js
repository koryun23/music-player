import renderer from "react-test-renderer";
import AddAll from "../components/toolbar/AddAll";

it('renders correctly', () => {
    const tree = renderer.create(<AddAll />).toJSON();
    expect(tree).toMatchSnapshot();
})