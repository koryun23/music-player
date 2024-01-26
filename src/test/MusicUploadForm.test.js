import renderer from "react-test-renderer";
import MusicUploadForm from "../components/upload/MusicUploadForm";

it('music upload form renders correctly', () => {
    let component = renderer.create(<MusicUploadForm />)
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    console.log(tree.children);
    expect(tree.children.length).toBe(4);
})