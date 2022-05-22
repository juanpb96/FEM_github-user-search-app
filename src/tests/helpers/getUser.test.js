import { getUser } from "../../helpers/getUser";

describe('Test getUser()', () => { 
    test('should return null if the user does not exist', async() => { 
        const username = 'asdc-test';

        expect(await getUser(username)).toEqual(null);
    });

    test('should return user data if user exists', async() => { 
        const username = 'octocat';
        const data = await getUser(username);

        expect(typeof data).toBe('object');
        expect(data.company).toBe('@github');
    });
});