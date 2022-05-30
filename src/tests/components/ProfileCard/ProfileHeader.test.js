import { shallow } from "enzyme";
import { ProfileHeader } from "../../../components/ProfileCard/ProfileHeader";

describe('Test <ProfileHeader />', () => { 
    test('should render correctly', () => { 
        const wrapper = shallow(
            <ProfileHeader
                atName={'octocat'}
                created_at={'2011-01-25T18:44:36Z'}
                name={'The octocat'}
            />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h2').text()).toBe('The octocat');
        expect(wrapper.find('p[datatype="join-date"]').text()).toBe('Joined at 25 Jan 2011');
        expect(wrapper.find('p[datatype="at"]').text()).toBe('@octocat');
    });

    test('should replace name with atName when it is empty', () => { 
        const wrapper = shallow(
            <ProfileHeader
                atName={'octocat'}
                created_at={'2011-01-25T18:44:36Z'}
                name={''}
            />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h2').text()).toBe('octocat');
        expect(wrapper.find('p[datatype="join-date"]').text()).toBe('Joined at 25 Jan 2011');
        expect(wrapper.find('p[datatype="at"]').text()).toBe('@octocat');
    });
});