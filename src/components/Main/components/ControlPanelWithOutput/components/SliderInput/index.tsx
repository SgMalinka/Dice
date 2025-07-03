'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { calculateMarks } from '@/core/utils/calculateMarks/calculateMarks';
import { sliderColors } from '@/core/constants';
import Typography from '@mui/material/Typography';

interface SliderInputProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
}

export const SliderInput = ({ value, onChange, min = 0, max = 100 }: SliderInputProps) => {
    const marks = calculateMarks(min, max).map(val => ({ value: val }));

    return (
        <Box sx={{ width: '100%', maxWidth: '320px' }}>
            <Slider
                aria-label="Custom Slider"
                value={value}
                onChange={(_, val) => onChange(val as number)}
                valueLabelDisplay="auto"
                step={1}
                marks={marks}
                min={min}
                max={max}
                sx={{
                    height: 2,
                    color: sliderColors.primary,
                    '& .MuiSlider-thumb': {
                        width: 12,
                        height: 12,
                        backgroundColor: sliderColors.primary,
                        border: `2px solid ${sliderColors.thumbBorder}`,
                        '&:hover': {
                            boxShadow: `0 0 0 6px ${sliderColors.thumbHoverShadow}`,
                        },
                    },
                    '& .MuiSlider-rail': {
                        color: sliderColors.rail,
                        opacity: 1,
                    },
                    '& .MuiSlider-track': {
                        color: sliderColors.primary,
                    },
                }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 0.87 }}>
                <Typography variant="body1" sx={{ fontSize: 12, color: sliderColors.textColor }}>
                    {min}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: 12, color: sliderColors.textColor }}>
                    {max}
                </Typography>
            </Box>
        </Box>
    );
};
