import { extractNumberFromString } from "../../utils/extractNumberFromString";

describe('Allow to extract number from the String efficiently', () => {
    it('should return the number when a valid number is within the string', () => {
      expect(extractNumberFromString('1 Runs')).toBe(5);
    });
  
    it('should return 0 if the number is greater than 6', () => {
      expect(extractNumberFromString('7 Runs')).toBe(0);
    });
  
    it('should return 0 if the number is less than 0', () => {
      expect(extractNumberFromString('Score is -5')).toBe(0);
    });
  
    it('should return the first number if multiple numbers are present', () => {
      expect(extractNumberFromString('Runs 4 or 6')).toBe(4);
    });
  
    it('should return 0 if no numbers are present', () => {
      expect(extractNumberFromString('great score!')).toBe(0);
    });

  });