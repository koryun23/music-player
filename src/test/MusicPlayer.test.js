import renderer from "react-test-renderer"
import MusicPlayer from "../components/MusicPlayer";

it('renders correctly', () => {
    let component = renderer.create(<MusicPlayer />)
    let tree = component.toJSON();
    console.log(tree.children);
    expect(tree).toMatchSnapshot();
    expect(tree.children.length).toBe(3);
})
