'use client';

import React from 'react';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { GuessType } from '@/core/enums';

interface RadioGroupInputsProps {
    value: GuessType.UNDER | GuessType.OVER;
    onChange: (value: GuessType.UNDER | GuessType.OVER) => void;
}

export const RadioGroupInputs = ({ value, onChange }: RadioGroupInputsProps) => (
    <FormControl sx={{ margin: '16px 0px 32px 0' }}>
        <RadioGroup
            row
            value={value}
            onChange={e => onChange(e.target.value as GuessType.UNDER | GuessType.OVER)}
        >
            <FormControlLabel
                value={GuessType.UNDER}
                labelPlacement="start"
                control={<Radio sx={{ color: '#9c27b0', '&.Mui-checked': { color: '#9c27b0' } }} />}
                label="Under"
            />
            <FormControlLabel
                value={GuessType.OVER}
                labelPlacement="start"
                control={<Radio sx={{ color: '#9c27b0', '&.Mui-checked': { color: '#9c27b0' } }} />}
                label="Over"
            />
        </RadioGroup>
    </FormControl>
);
