'use client'
import { authModalToggle } from '@/store/slice';
import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';

interface WrapperProps {
    children: ReactNode; 
    className?: string; // Optional prop to add extra styles later
}

export default function ToggleAuthBtn({ children, className = '' }: WrapperProps) {
    const dispatch = useDispatch()

    return (
        <div className={`${className}`} onClick={() => dispatch(authModalToggle())}>
        {/* This renders whatever is placed inside the component tags */}
            {children} 
        </div>
    );
}