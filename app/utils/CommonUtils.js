'use strict';

/**
 * @return {boolean}
 */
export function NaviGoBack(navigator) {
    return (navigator && navigator.getCurrentRoutes().length > 1) ? ( navigator.pop(),true) : false
}

export const formatDateString = (timestamp) => {
    const date = new Date(parseInt(timestamp) * 1000);
    const year = date.getFullYear();
    const month = parseInt(date.getMonth()) + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
};

export const formatStringWithHtml = (originString) => {
    return originString
        .replace(/&nbsp;/g, ' ')
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
};