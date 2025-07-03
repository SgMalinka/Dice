import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { sliderColors } from '@/core/constants';

interface PlayButtonProps {
    onClick: () => void;
}

export const PlayButton = ({ onClick }: PlayButtonProps) => (
    <Stack direction="row" sx={{ margin: '16px 0px' }}>
        <Button
            variant="contained"
            sx={{
                backgroundColor: sliderColors.primary,
                padding: '8px 141px',
                fontSize: '0.938rem',
                lineHeight: '26px',
                fontWeight: 500,
                '&:hover': {
                    backgroundColor: '#8e24aa',
                },
            }}
            onClick={onClick}
        >
            PLAY
        </Button>
    </Stack>
);
