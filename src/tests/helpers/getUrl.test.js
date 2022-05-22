import { getUrl } from "../../helpers/getUrl";

describe('Test getUrl()', () => { 
    describe('URL has no type', () => { 
        test('should return empty if there is no value', () => { 
            expect(getUrl()).toBe('');
        });
    
        test('should return the same value if it starts with "http" or "https"', () => { 
            const value1 = 'http://value1.com';
            const value2 = 'https://value2.com';
    
            expect(getUrl(value1)).toBe(value1);
            expect(getUrl(value2)).toBe(value2);
        });
        
        test('should return a valid url if the value has not "http" or "https"', () => { 
            const value = 'testurl.io';
           
            expect(getUrl(value)).toBe(`http://${ value }`);
        });
    });

    describe('URL has a type', () => { 
        test('should return a valid twitter profile url', () => { 
            const value = 'testprofile';
            const type = 'twitter';

            expect(getUrl(value, type)).toBe(`https://twitter.com/${ value }`);
        });

        test('should return empty for type "company" when the value does not have an "@" symbol', () => { 
            const value = 'testcompany';
            const type = 'company';
            
            expect(getUrl(value, type)).toBe('');
        });

        test('should return a valid github profile url when the type is "company" and value starts with an "@" symbol', () => { 
            const value = '@testcompany';
            const type = 'company';
            
            expect(getUrl(value, type)).toBe(`https://github.com/${ value.slice(1) }`);
        });
    });
});