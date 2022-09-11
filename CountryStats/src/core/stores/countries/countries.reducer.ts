import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { loadCountries, loadCountriesError, loadCountriesSuccess, loadFlags, loadFlagsError, loadFlagsSuccess } from './countries.actions';
import { CountriesStore } from './countries.store';

export const initialState: Partial<CountriesStore> = {
    loading: false
};

const reducer: ActionReducer<Partial<CountriesStore>, Action> = createReducer(
    initialState,
    on(loadCountries, (state) => ({
        ...state,
        loading: true
    })),
    on(loadCountriesSuccess, (state, action) => ({
        ...state,
        countries: action.countries,
        loading: false
    })),
    on(loadCountriesError, (state, action) => ({
        ...state,
        error: action.error,
        loading: false
    })),
    on(loadFlags, (state) => ({
        ...state,
        loading: true
    })),
    on(loadFlagsSuccess, (state, action) => ({
        ...state,
        flags: state.flags?.filter(dt =>
        {
            action.flags = dt.png
        }),
        loading: false
    })),
    on(loadFlagsError, (state, action) => ({
        ...state,
        error: action.error,
        loading: false
    }))
);

export function CountriesReducer(
    state: Partial<CountriesStore> = initialState,
    action: Action
): Partial<CountriesStore>
{
    return reducer(state, action);
}