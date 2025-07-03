import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import s from './index.module.scss';

interface ResultProps {
    value: number | null;
}

export const Result = ({ value }: ResultProps) => (
    <Box className={s.result}>
        <Typography className={s.result__info} component="p">
            {value !== null ? value : '-'}
        </Typography>
    </Box>
);
