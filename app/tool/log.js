let dateToStr = (date) => {
    date = date || new Date();

    let y  = date.getFullYear(),
        m  = date.getMonth() + 1,
        d  = date.getDate(),
        h  = date.getHours(),
        mm = date.getMinutes(),
        s  = date.getSeconds();

    return  y + '-' + (m > 9 ? m : '0'+m) + '-' + (d > 9 ? d : '0'+d) + ' ' + (h > 9 ? h : '0'+h) + ':' + (mm > 9 ? mm : '0'+mm) + ':' + (s > 9 ? s : '0'+s);
};
class DevLog {
    constructor (...args) {
        this.status = (process.env.NODE_ENV.trim() == 'production');
    }

    info (text) {
        this.status && console.log(dateToStr(), '[LOG]', text);
    }

    error (text) {
        this.status && console.error(dateToStr(), '[ERROR]', text);
    }

    debug (text) {
        this.status && console.debug(dateToStr(), '[DEBUG]', text);
    }

    warn (text) {
        this.status && console.warn(dateToStr(), '[WARN]', text);
    }
}

module.exports = new DevLog();
