import React from "react";
import {Box} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const Country = ({...other}) => {
    const theme = useTheme();
    const PRIMARY_DARK = theme.palette.primary.dark;
    return (
        <Box {...other}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 327 240">
                <circle fill={PRIMARY_DARK} cx={163.5} cy={120} r={88.5} />
                <g fill="#E9EFF4">
                    <path d="M120.5 194.2c0 .1 0 .1 0 0 .1.1.2.2.3.2l-.3-.2zM114.9 69.5l-.2-.4c1.5-.2 1.6-1.3 2.7-1.6 1.3-.4.8 0 2.1 0 1 0 1.6.7 2.8.2-.3.5-.7.8-1.2 1.2-1 .7-1.9 1.4-3.1 1.6-1.1.3-2.4 0-3.1-1z" />
                    <path d="M132.6 148.4c0 .8-.5 1.5-.9 2.1-1.8 2.9-2.9 6.3-3.1 9.7-.2 3.3-.1 7.3-2.9 8.9-1.6.9-3.9.7-5 2.3-.3.5-.5 1-.7 1.6-.7 2.5-1.4 5.1-2.1 7.6l-2.7-.3c1.1.3 1.8 1.8 1.2 2.8-1-.5-2.4.1-2.9 1.1s-.5 2.3-.2 3.4c.9 3.3 3.8 6 7.1 6.8-.6 1.1-2.4.6-3.4-.1-7.7-5.2-13.6-13.2-16.3-22.2-.9-3.2-1.5-6.5-3.4-9.2-1.5-2.3-3.9-4-5.4-6.3-2.2-3.3-2.6-7.6-5.1-10.6-1.4-1.7-3.6-3.8-2.3-5.7.5-.8 1.6-1.5 1.1-2.3-.1-.3-.4-.4-.6-.6-.8-.9-.3-2.3.2-3.5.7-2 .7-4.2.4-6.3-2.1-1.9-3.8-4.2-4.8-6.8-.6-1.6-1.4-3.6-3.2-3.6-.4-1.2-.9-2.5-1.3-3.7-.2.4-.6.7-1.1.8 1.3-20.3 9.5-38.7 22.2-52.9.3-.1.6-.3.8-.4 3-1.8 5.4-4.4 8.3-6.3.6-.4 1.3-.8 2-.7.7.1 1.4.8 1.1 1.5-.1.3-.3.5-.6.7-3.4 2.9-7.2 5.4-11.1 7.6-.5.2-1 .5-1.2 1-.4.8.3 1.8 1.1 2.1.9.3 1.8.1 2.7-.1-.7 1.1-1 2.5-.6 3.7.8.1 1.1-1 1.3-1.8 1-3.1 5.9-4.4 5.6-7.6 1.3.7 2.7-.9 3.5-2.1.8-1.3 2.6-2.6 3.6-1.4.1.6.1 1.3.2 1.9 1.8-.4 3.5-.9 5.3-1.3-1 .7-1.3 2.2-.8 3.3.6 1.1 2 1.6 3.2 1.2 0 .9-.9 1.7-1.6 2.2-1.9 1.5-4 3-6.3 3.7l.5 1.1h-.2c-1.4.1-3-.9-4.5-.7-.9.1-2.1.1-2.6 1.1-.1.1-.4 1.8-.2 1.7.8-.5 1.7-1 2.5-1.4.3.7.3 1.4.2 2.2 1-.1 2.1.1 3 .7-.9 2.2-3.4 3.6-5.7 3.5 0-.7-.1-1.4-.1-2.2-2-.2-3.6 1.5-4.5 3.2-1 1.7-1.8 3.6-3.4 4.7-1 .7-2.2.9-3.3 1.5-1.1.6-2 1.7-1.8 2.9.1.6.5 1.1.4 1.7-.1 1.1-1.3 1.6-2.2 2.3-1.4 1.2-1.8 3.4-3.3 4.5-1.1.8-2.6.8-3.9 1.2-1.3.4-2.6 1.7-2.1 3-.6.2-1.4-.3-1.5-.9-2.3 4.5-3.8 9.4-4.4 14.5 1.1.8 2.3-1 2.5-2.4.2-1.4 1.4-3.2 2.6-2.4-.3 2-.5 3.9-.8 5.9-.1.4-.1.8.1 1.1.2.4.7.6 1.1.9 1 .9.9 2.4.9 3.8.1 1.6.6 3.2 1.5 4.6-.1-.3-.1-.6-.2-.8 1.6.2 3.2-.3 4.4-1.3.6-.6 1.1-1.3 1.9-1.6.8-.3 1.7-.1 2.5.1 2.5.7 5.2 1.5 6.9 3.5.9 1 1.4 2.3 2.4 3.1 2.3 2 6.2 1.1 8.4 3.3 1.7 1.8 1.4 4.6.9 7-1.2-.6-2.7 1-2 2.1.6-.7 1.3-1.4 2.2-1.4.9 0 1.7 1.2 1 1.8 1.6-2 5.5-1.2 6.1 1.3 2.2.2 4.5.3 6.7.5 0 2.6 6.9 2.8 6.7 6.1zM119 55.8c-.9.4-2.1-.1-2.4-1-.3-.9.3-2 1.2-2.2.6-.1 1.4-.1 1.6-.7.1-.2 0-.4 0-.6 0-1.1 1-2 2-2.3 1.1-.3 2.2-.1 3.3.1.4.8.5 1.7.3 2.6-.7 0-1.5.1-2.2.1.1 1.2-.1 2.8-1.2 3.2-1 .4-2.3-.3-3.2.3M130.5 43.6c2-1 3.7-2.5 5.7-3.5 3.4-1.7 7.4-1.9 11.2-2 8.7-.3 17.4-.5 26.2-.8-2 1.1-4 2.2-6.1 3.3-1.7.9-3.5 1.8-5.3 1.3 0 1.5 1.3 2.8 2.7 2.8-3.6 2.2-8.6 0-12.3 1.8-1.6.8-2.9 2.3-4.6 2.5-1 .2-2.1-.1-3.1.1-1.7.4-2.7 2-4 3.1-1.4 1.4-3.5 2.3-5.4 1.7-1.9-.7-2.8-3.4-1.3-4.7.7-.6 1.8-.7 2.7-1.2.9-.4 1.6-1.6.9-2.4-.3-.3-.7-.4-1-.8-.3-.4-.3-.9-.5-1.3-.9-1.6-3.4.5-5-.1M156.9 51c1.2-.3 2.2-1 3.3-1.5s2.4-.8 3.5-.3c.3.8-.6 1.5-1.4 1.8-1.6.5-3.3.7-4.9.4M228.3 59.8c-.3 0-.7 0-1-.1-1.5-.3-2.6-1.5-3.9-2.3-3-2-7-2.2-10.2-.6.8-1.1 1.1-2.5 1.1-3.8l-.5.2c-5.2-3-11.4-6.2-17.1-4.2-1.3.5-2.5 1.2-3.9 1.7s-3 .7-4.2 1.6c-1.2.9-1.9 2.8-.8 3.9.9.9 2.3.7 3.6.8 1.2.1 2.7 1.4 2 2.4-5.5 2.6-11 5.1-16.5 7.7 2.5.8 4.2 3.7 3.6 6.3-1.8.3-3.6-.8-5.5-.9-2.7-.1-5.3 2.2-5.3 4.9-.1 2.7 2.4 5.2 5.1 5.2 2 0 4-1.2 6-.7.1-1.8 1.3-3.4 2.6-4.7 2.5-2.5 6.1-4.8 9.5-3.6 1.1.4 2 1.1 3 1.9 2 1.6 4 3.2 6.1 4.8.6-.7 1.3-1.3 1.9-2 1.1 1.2 2.2 2.3 3.3 3.5.6-.4 1.1-.7 1.7-1.1.4 1 .8 2.1 1.2 3.1.2-1.1.3-2.3.4-3.4 1.3 0 2.7.1 3.9-.5 1.2-.6 2.1-2 1.6-3.3-.3-.7-.9-1.2-1-1.9-.3-1.4 1.7-2.4 3-1.7 1.3.6 1.9 2.1 2.5 3.4.3-1.4.6-2.7.9-4.1 1.3 3.3 3.1 6.4 5.3 9.1-4.1-.8-8.4-.3-12.3 1.2 1.2 1.7 3.3 2.7 5.4 2.7.9 0 2-.2 2.7.4.5.5.7 1.2.8 1.9l.9 5.7c-2.2-1.8-5.3-1.6-8.1-1.6-2.8-.1-6.1-.9-7.2-3.5-1.1 1.3-1.6 3.1-1.3 4.7-2.9-.7-6.3-1.8-7.1-4.7-2.3.8-5.1-.6-5.7-3-.2-.8-.3-1.8-1-2.3-.4-.3-1-.2-1.5-.2-4.3.5-8.7 1-13 1.5-2.4.3-4.8.6-6.9 1.7-2.1 1.1-3.7 3.4-3.5 5.7-4 2.4-7.4 5.8-9.6 9.8-.7 1.2-1.3 2.7-1.1 4.1.2 1.1.9 2 1.1 3.1.4 1.8-.7 3.6-1.1 5.4-1.2 5.1 2.6 9.9 6.3 13.8 1.7 1.8 3.7 3.8 6.1 3.9 1.5.1 3-.6 4.4-1.2 4.1-1.6 8.6-2.4 13-2.2-1 .8 0 2.5 1.3 2.7 1.2.3 2.6-.1 3.8.3 2.7 1 2.4 5 1.1 7.6.6-.1 1.3-.2 1.9-.4-.3.9-.7 1.8-1 2.6 3.8.5 5.2 5.4 4.3 9.1-.9 3.7-3.1 7.1-3.1 10.9 0 2.1.6 4.1 1.3 6.1 1.6 5 3.2 10 4.8 15.1 4.5.5 7.1-5.2 11.2-6.9 1.6-.7 3.4-.8 4.6-2 1.2-1.1.8-3.7-.7-3.7 2.1-.2 3.8-2.1 3.9-4.2 0-.6-.1-1.2 0-1.7.1-.8.7-1.5 1.2-2.2 3.2-4.6 5.2-9.8 7.3-15 .5-1.4 1.1-2.7 1.6-4.1 2-5.1 4.1-10.3 6.1-15.4l2.4-6c-1.1 1.8-4 1.6-5.6.2-1.7-1.4-2.5-3.4-3.8-5.1-1.1-1.5-2.6-2.8-3.1-4.5-.3-1-.2-2.1-.4-3.2-.4-2.3-1.9-4.2-3-6.3s-1.6-4.8-.1-6.6c4.2 7.3 8 14.9 11.5 22.6.4-1.2 1.3-2.2 2.4-2.8.8-.4 1.7-.6 2.6-1 2.3-1 3.9-3.4 3.9-5.9 0-2.5-1.6-4.9-3.9-5.9-1.1-.5-2.4-.6-3.5-1.3-1.1-.6-1.9-2.1-1.2-3.2.6-1 2.2-1 3.2-.4 1.1.6 1.8 1.6 2.8 2.2.7.5 1.6.8 2.3 1.2 4.2 2.4 5.3 7.9 6.2 12.7.5 2.6 1 5.1 1.7 7.7v-1.6c-.1-23.2-9.1-44.4-23.7-60.1zm8.1 29c-.6 0-1.1-.4-1.6-.8-.8-.6-1.5-1.3-1.7-2.2-.3-1.1.3-2.4-.3-3.4-.3-.5-.8-.8-1.2-1.1-1.1-.9-1.9-2.1-2.2-3.5-.3-1.2.1-2.8 1.3-3 .6-.1 1.2.2 1.5.8l-.8.4c1.4.2 2 2.2 1 3.1-.1.1-.3.3-.3.5 0 .1.1.2.2.3.9.9 2.1 1.3 3.3 1.9 1.1.6 2.2 1.7 2 2.9-.4.1-.7.3-1.1.4-.4.4-.1 1.1.3 1.4.4.4.9.8.9 1.3-.1.6-.7 1.1-1.3 1zM236.9 150.4l-1.4 1c.5 1.8-.5 3.8-2.2 4.5-.9.4-2.1.5-2.4 1.5-.3.8.4 1.6.4 2.4.1 1.4-1.1 2.4-2.1 3.4s-1.4 2.9-.2 3.5c.3.1.6.2.9.2 1.3.1 2.8.2 3.9-.6 3.1-2.2.2-8.2 3.2-10.5.4-.3 1-.6 1.2-1 .8-1.5-1.8-2.9-1.3-4.4z" />
                </g>
                <linearGradient
                    id="prefix__a"
                    gradientUnits="userSpaceOnUse"
                    x1={-282.89}
                    y1={3.052}
                    x2={-282.31}
                    y2={2.524}
                    gradientTransform="matrix(327 0 0 240.0001 92584 -550)">
                    <stop offset={0} stopColor="#919eab" />
                    <stop offset={1} stopColor="#919eab" stopOpacity={0} />
                </linearGradient>
                <path
                    opacity={0.2}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="url(#prefix__a)"
                    d="M0 132.5c0 27.6 10.2 52.8 26.9 71.9C46.2 226.2 74 240 105.1 240c13.6 0 26.6-2.6 38.5-7.4 6.2-2.5 13.1-2.2 19 .7 7 3.4 14.8 5.3 23.1 5.3 3.4 0 6.8-.3 10-1 9.3-1.8 17.7-6 24.6-12 4.3-3.8 9.9-5.6 15.6-5.6h.1c18.8 0 36.3-5.8 50.7-15.8 13-8.9 23.5-21.1 30.6-35.5 6.1-12.5 9.6-26.6 9.6-41.6 0-51.3-40.7-92.9-90.9-92.9-5.1 0-10.1.4-15 1.3C208.1 14.3 184.9 0 158.4 0c-11.2 0-21.8 2.5-31.3 7.1-9 4.3-17 10.5-23.6 18-22.3.4-42.9 7.8-59.7 20.2C17.3 64.8 0 96.6 0 132.5z"
                />
                <path
                    opacity={0.545}
                    fill="#C4CDD5"
                    d="M190.6 29.1c-2.2 0-4.4-.8-6-2.5-3.3-3.3-3.3-8.7 0-12.1 3.3-3.3 8.7-3.3 12.1 0 3.3 3.3 3.3 8.7 0 12.1-1.7 1.6-3.9 2.5-6.1 2.5zm0-11.2c-.7 0-1.4.3-1.9.8-1 1-1 2.7 0 3.7s2.7 1 3.7 0 1-2.7 0-3.7c-.4-.6-1.1-.8-1.8-.8zM123.6 228.2c-2.2 0-4.4-.8-6-2.5-3.3-3.3-3.3-8.7 0-12.1 3.3-3.3 8.7-3.3 12.1 0 3.3 3.3 3.3 8.7 0 12.1-1.8 1.7-4 2.5-6.1 2.5zm0-11.2c-.7 0-1.4.3-1.9.8-1 1-1 2.7 0 3.7s2.7 1 3.7 0 1-2.7 0-3.7c-.5-.5-1.2-.8-1.8-.8z"
                />
                <path
                    fill="#DFE3E8"
                    d="M272.7 188c-.8 0-1.5-.3-2.1-.9l-3.5-3.5-3.5 3.5c-1.1 1.1-3 1.1-4.2 0-1.1-1.1-1.1-3 0-4.2l5.6-5.6c1.1-1.1 3-1.1 4.2 0l5.6 5.6c1.1 1.1 1.1 3 0 4.2-.6.6-1.4.9-2.1.9z"
                />
                <path
                    fill="#D5DBE0"
                    d="M65.2 176.8c-.8 0-1.5-.3-2.1-.9l-3.5-3.5-3.5 3.6c-1.1 1.1-3 1.1-4.2 0-1.1-1.1-1.1-3 0-4.2l5.6-5.6c1.1-1.1 3-1.1 4.2 0l5.6 5.6c1.1 1.1 1.1 3 0 4.2-.6.5-1.3.8-2.1.8z"
                />
            </svg>
        </Box>
    );
};

export default Country;
