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
        this.status = (process.env.NODE_ENV.trim() == 'dev');
    }

    info (...args) {
        this.status && console.log(dateToStr(), '[LOG]', ...args);
    }

    error (...args) {
        this.status && console.error(dateToStr(), '[ERROR]', ...args);
    }

    debug (...args) {
        this.status && console.debug(dateToStr(), '[DEBUG]', ...args);
    }

    warn (...args) {
        this.status && console.warn(dateToStr(), '[WARN]', ...args);
    }
}

module.exports = new DevLog();
