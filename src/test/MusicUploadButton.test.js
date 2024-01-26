import renderer from "react-test-renderer";
import MusicUploadButton from "../components/upload/MusicUploadButton";

it('music upload button renders correctly', () => {
    let component = renderer.create(<MusicUploadButton />)
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})
