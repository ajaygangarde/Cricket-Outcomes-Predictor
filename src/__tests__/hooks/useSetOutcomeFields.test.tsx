// import { renderHook, act } from '@testing-library/react-hooks';
import { renderHook, act  } from '@testing-library/react';
import { BowlTypes, ShotTypes, TimingTypes } from '../../configs/constant';
import { useSetOutcomeFields } from '../../hooks/useSetOutcomeFields'; // Adjust the import path as necessary
import { validateDataAvailable } from '../../utils/validateDataAvailable';

function setupHook() {
    return renderHook(() => useSetOutcomeFields());
}

describe('Validated Input fields functionality / logic of Outcome ', () => {
    it('initializes with default values', () => {
        const { result } = setupHook();

        expect(result.current.rows.length).toBe(1); // Assuming IOutcomeFieldsModel creates one default row
        expect(result.current.bowlCount).toBe(2);
    });

    it('Handle delivery change which updates String', () => {
        const { result } = setupHook();
        act(() => {
            result.current.handleDeliveryChange(0, BowlTypes[0]);
        });

        expect(result.current.rows[0].delivery).toBe(BowlTypes[0]);
        expect(result.current.rows[0].shot).toBe('');
        expect(result.current.rows[0].timing).toBe('');

    });

    it('Handle shot change which updates String', () => {
        const { result } = setupHook();

        act(() => {
            result.current.handleShotChange(0, ShotTypes[0]);
        });

        expect(result.current.rows[0].shot).toBe(ShotTypes[0]);
        expect(result.current.rows[0].timing).toBe('');
    });

    it('handles timing change correctly', () => {
        const { result } = setupHook();

        act(() => {
            result.current.handleTimingChange(0, TimingTypes[0]);
        });

        expect(result.current.rows[0].timing).toBe(TimingTypes[0]);
    });


    it('restrict to add more rows unless all fields are selected', () => {
        const { result } = setupHook();
        act(() => {
            result.current.handleDeliveryChange(0, BowlTypes[0]);
        });

        expect(validateDataAvailable(result.current.rows as any)).toBe(false)
    });
});
