import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import { COLORS } from '@/core/enums';

interface HistoryItem {
    id: string;
    time: string;
    guess: string;
    result: number;
    isUserWon: boolean;
}

interface TableResultProps {
    history: HistoryItem[];
}

export const TableResult = ({ history }: TableResultProps) => {
    return (
        <TableContainer
            component={Box}
            sx={{
                maxWidth: 600,
                margin: 'auto',
                backgroundColor: 'transparent',
                boxShadow: 'none',
                border: 'none',
                overflow: 'visible',
            }}
        >
            <Table
                aria-label="basic table"
                sx={{
                    backgroundColor: 'transparent',
                    border: 'none',
                }}
            >
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' }}>
                            Time
                        </TableCell>
                        <TableCell sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' }}>
                            Guess
                        </TableCell>
                        <TableCell sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' }}>
                            Result
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {history.map(item => (
                        <TableRow key={item.id}>
                            <TableCell sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' }}>
                                {item.time}
                            </TableCell>
                            <TableCell sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' }}>
                                {item.guess}
                            </TableCell>
                            <TableCell
                                sx={{
                                    color: item.isUserWon ? COLORS.GREEN : COLORS.RED,
                                    borderBottom: '1px solid rgba(224, 224, 224, 1)',
                                }}
                            >
                                {item.result}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
