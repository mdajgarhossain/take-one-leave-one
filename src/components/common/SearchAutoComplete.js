import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchAutoComplete({ optionLabel, onChange, options, placeholder }) {
    return (
        <Autocomplete
            getOptionLabel={optionLabel}
            onChange={onChange}
            sx={{ width: 400 }}
            options={options}
            renderInput={(params) => <TextField {...params} label={placeholder} InputLabelProps={{
                style: { color: '#2E3B55', fontSize: 18 },
            }} />}
        />
    );
}