import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface PlayButtonProps {
    onClick: () => void;
}

export const PlayButton = ({ onClick }: PlayButtonProps) => (
    <Stack direction="row" sx={{ margin: '16px 0px' }}>
        <Button
            variant="contained"
            sx={{
                backgroundColor: '#9c27b0',
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
