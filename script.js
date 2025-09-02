function updateTime() {
    const now = new Date();

    // UTC
    const utcTime = now.toUTCString().split(' ')[4];
    document.getElementById('time-utc').textContent = utcTime;

    // EST (UTC - 5)
    const estTime = new Date(now.getTime() - (5 * 60 * 60 * 1000)).toUTCString().split(' ')[4];
    document.getElementById('time-est').textContent = estTime;

    // PST (UTC - 8)
    const pstTime = new Date(now.getTime() - (8 * 60 * 60 * 1000)).toUTCString().split(' ')[4];
    document.getElementById('time-pst').textContent = pstTime;

    // IST (UTC + 5:30)
    const istTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000)).toUTCString().split(' ')[4];
    document.getElementById('time-ist').textContent = istTime;
}

setInterval(updateTime, 1000);
updateTime();