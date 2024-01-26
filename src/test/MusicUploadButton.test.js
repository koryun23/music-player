import renderer from "react-test-renderer";
import MusicUploadButton from "../components/upload/MusicUploadButton";

it('music upload button renders correctly', () => {
    const tree = renderer.create(<MusicUploadButton />).toJSON();
    expect(tree).toMatchSnapshot();
})
