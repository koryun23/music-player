import renderer from "react-test-renderer";
import PlayAll from "../components/toolbar/PlayAll";

it('renders correctly', () => {
    const tree = renderer.create(<PlayAll />).toJSON();
    expect(tree).toMatchSnapshot();
})