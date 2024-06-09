import React from 'react';

type ButtonType = {
    className: string
    onClick: () => void
    title: string
    disabled: boolean
}

export const Button = ({className, onClick, title, disabled}: ButtonType) => {
    return (
        <button className={className}
                onClick={onClick}
                disabled={disabled}
        >{title}</button>
    );
};
