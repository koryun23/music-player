import renderer from "react-test-renderer";
import MusicUploadForm from "../components/upload/MusicUploadForm";

it('music upload form renders correctly', () => {
    const tree = renderer.create(<MusicUploadForm />).toJSON();
    expect(tree).toMatchSnapshot();
})