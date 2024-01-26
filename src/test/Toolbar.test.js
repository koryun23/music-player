import renderer from "react-test-renderer";
import Toolbar from "../components/toolbar/Toolbar";

it('renders correctly', () => {
    const tree = renderer.create(<Toolbar />).toJSON();
    expect(tree).toMatchSnapshot();
})