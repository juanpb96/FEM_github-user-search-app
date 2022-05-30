import { shallow } from "enzyme";
import { DetailsCard } from "../../../components/ProfileCard/DetailsCard";

describe('Test <DetailsCard />', () => { 
    test('should render correctly', () => { 
            const wrapper = shallow(
                <DetailsCard 
                    repos={10}
                    followers={20}
                    following={350}
                />
            );

            expect(wrapper).toMatchSnapshot();
            
            const [ 
                repos,
                followers,
                following
            ] = wrapper.find('.title-color').map(e => +e.text());

            expect(repos).toBe(10);
            expect(followers).toBe(20);
            expect(following).toBe(350);
    });   
});