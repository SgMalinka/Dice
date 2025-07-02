'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export const SliderInput = () => {
    return (
        <Box sx={{ width: 320 }}>
            <Slider
                aria-label="Custom Slider"
                defaultValue={0}
                valueLabelDisplay="auto"
                shiftStep={30}
                step={20}
                marks
                min={0}
                max={100}
                sx={{
                    height: 2,
                    color: '#9c27b0',
                    '& .MuiSlider-thumb': {
                        width: 12,
                        height: 12,
                        backgroundColor: '#9c27b0',
                        border: '2px solid white',
                        '&:hover': {
                            boxShadow: '0 0 0 6px rgba(156, 39, 176, 0.16)',
                        },
                    },
                    '& .MuiSlider-rail': {
                        color: '#e1bee7',
                        opacity: 1,
                    },
                    '& .MuiSlider-track': {
                        color: '#9c27b0',
                    },
                }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 0.87 }}>
                <span style={{ fontSize: 12, color: '#555' }}>0</span>
                <span style={{ fontSize: 12, color: '#555' }}>100</span>
            </Box>
        </Box>
    );
};
