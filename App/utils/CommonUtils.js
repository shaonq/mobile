'use strict';

/**
 * @return {boolean}
 */
export function NaviGoBack(navigator) {
    return (navigator && navigator.getCurrentRoutes().length > 1) ? ( navigator.pop(),true) : false
}
