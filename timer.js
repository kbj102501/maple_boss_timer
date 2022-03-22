
var timer = new Array(4);

const countDownTimer = function (id, min, sec, repeate) { 
    var _vDate = new Date(); 

    _vDate.setMinutes(_vDate.getMinutes() + parseInt(min)); 
    _vDate.setSeconds(_vDate.getSeconds() + parseInt(sec)); 

    var _second = 1000; 
    var _minute = _second * 60; 
    var _hour = _minute * 60; 
    var _day = _hour * 24; 

    clearInterval(timer[id]);

    function showRemaining() { 
        var now = new Date(); 
        var distDt = _vDate - now; 
        if (distDt < 0) 
        {
            if(repeate)
            {
                _vDate.setMinutes(_vDate.getMinutes() + parseInt(min)); 
                _vDate.setSeconds(_vDate.getSeconds() + parseInt(sec)); 
                distDt = _vDate - now; 
            } 
            else
            {
                clearInterval(timer[id]); 
                document.getElementById(id).textContent = '00:00';
                return; 
            }
        } 
        var days = Math.floor(distDt / _day); 
        var hours = Math.floor((distDt % _day) / _hour); 
        var minutes = Math.floor((distDt % _hour) / _minute); 
        var seconds = Math.floor((distDt % _minute) / _second); 
        if(minutes < 10)
        {
            minutes = "0" + minutes;
        }
        if(seconds < 10)
        {
            seconds = "0" + seconds;
        }

        //document.getElementById(id).textContent = date.toLocaleString() + "까지 : "; 
        // document.getElementById(id).textContent += hours + '시간 '; 
        document.getElementById(id).textContent = "";//days + '일 '; 
        document.getElementById(id).textContent += minutes + ':'; 
        document.getElementById(id).textContent += seconds + ''; } 
        timer[id] = setInterval(showRemaining, 100); 
}
