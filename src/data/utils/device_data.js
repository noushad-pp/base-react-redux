export const getLang = function () {
    return (navigator.languages && navigator.languages.length) ? navigator.languages[0].split('-')[0] : navigator.language.split('-')[0];
};

export const checkDevice = {
    isMobile: function () {
        if (navigator.userAgent.match(/Android/i)) {
            return ({
                mobile: true,
                userAgent: 'Android'
            });
        } else if (navigator.userAgent.match(/BlackBerry/i)) {
            return ({
                mobile: true,
                userAgent: 'BlackBerry'
            });
        } else if (navigator.userAgent.match(/iPhone|iPod/i)) {
            return ({
                mobile: true,
                userAgent: 'iPhone'
            });
        } else if (navigator.userAgent.match(/iPad/i)) {
            return ({
                mobile: false,
                userAgent: 'iPad'
            });
        } else if (navigator.userAgent.match(/Opera Mini/i)) {
            return ({
                mobile: true,
                userAgent: 'Opera'
            });
        } else if (navigator.userAgent.match(/IEMobile/i)) {
            return ({
                mobile: true,
                userAgent: 'WindowsPhone'
            });
        } else if (navigator.userAgent.match(/Chrome/i)) {
            return ({
                mobile: false,
                userAgent: 'Web Chrome'
            });
        } else if (navigator.userAgent.match(/Safari/i)) {
            return ({
                mobile: false,
                userAgent: 'Web Safari'
            });
        } else if (navigator.userAgent.match(/Mozilla/i)) {
            return ({
                mobile: false,
                userAgent: 'Web Mozilla'
            });
        } else {
            return ({
                mobile: false,
                userAgent: 'Web'
            });
        }
    },
    screen_data: function () {
        return (
            {
                screen_width: window.innerWidth,
                screen_height: window.innerHeight,
                screen_orientation: window.matchMedia("(orientation:landscape)").matches ? 'landscape' : 'portrait',
                screen_type: this.screen_type()
            }
        );
    },
    screen_type: function () {
        if (window.innerWidth <= 480) {
            return 'xs';
        } else if (window.innerWidth <= 768) {
            return 'sm';
        } else if (window.innerWidth <= 992) {
            return 'md';
        } else if (window.innerWidth <= 1200) {
            return 'lg';
        } else if (window.innerWidth <= 1600) {
            return 'hd';
        } else if (window.innerWidth <= 2560) {
            return 'fhd';
        } else {
            return 'uhd';
        }
    },
    deviceStatus: function () {
        return ({
            ...this.isMobile(),
            ...this.screen_data()
        });
    }
};
