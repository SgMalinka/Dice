'use client';

import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export const RadioGroupInputs = () => {
    const [selectedValue, setSelectedValue] = useState<string>('Under');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <FormControl sx={{ margin: '16px 0px 32px 0' }}>
            <RadioGroup row value={selectedValue} onChange={handleChange}>
                <FormControlLabel
                    value="under"
                    labelPlacement="start"
                    control={
                        <Radio
                            sx={{
                                color: '#9c27b0',
                                '&.Mui-checked': {
                                    color: '#9c27b0',
                                },
                            }}
                        />
                    }
                    label="Under"
                />
                <FormControlLabel
                    labelPlacement="start"
                    value="over"
                    control={
                        <Radio
                            sx={{
                                color: '#9c27b0',
                                '&.Mui-checked': {
                                    color: '#9c27b0',
                                },
                            }}
                        />
                    }
                    label="Over"
                />
            </RadioGroup>
        </FormControl>
    );
};
