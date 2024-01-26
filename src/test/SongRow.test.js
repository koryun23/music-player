import renderer from "react-test-renderer";
import SongRow from "../components/songs/SongRow";

it('song row renders correctly', () => {

    let component1 = renderer.create(<SongRow />)
    let tree1 = component1.toJSON();
    console.log(tree1);
    expect(tree1).toMatchSnapshot();
    expect(tree1.children.length).toBe(7);

    let component2 = renderer.create(<SongRow songName="aaa"
                                              artistName="bbb"
                                              trackNumber={1}
                                              fileName="ccc"/>);
    let tree2 = component2.toJSON();
    expect(tree2.children[1].children).toBeDefined();
    expect(tree2.children[2].children).toBeDefined();
    expect(tree2.children[3].children).toBeDefined();
    expect(tree2).toMatchSnapshot();
})