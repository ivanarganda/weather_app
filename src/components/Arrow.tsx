import React from 'react';

interface Props extends Props_ {
    type: string;
    setByDays?: React.Dispatch<React.SetStateAction<number>>;
    byDays?: number | undefined;
}

interface Props_ {}

const Arrow: React.FC<Props> = ({ type, setByDays = () => {}, byDays = 0 }) => {
    if (type === 'left') {
        return (
            <div className="arrow left">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                        if (byDays !== undefined && byDays < 1) {
                            setByDays(6);
                        } else if (setByDays) {
                            setByDays((prevDays) => (prevDays !== undefined ? prevDays - 1 : 6));
                        }
                    }}
                    className="h-10 cursor-pointer w-10 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </div>
        );
    } else if (type === 'right') {
        return (
            <div className="arrow right">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                        if (byDays !== undefined && byDays > 6) {
                            setByDays(0);
                        } else if (setByDays) {
                            setByDays((prevDays) => (prevDays !== undefined ? prevDays + 1 : 0));
                        }
                    }}
                    className="h-10 cursor-pointer w-10 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        );
    } else {
        return null;
    }
};

export default Arrow;
