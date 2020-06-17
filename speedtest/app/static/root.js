function run_speedtest() {
    document.getElementById("speedtest").innerHTML = "<img src='static/loading.gif' />"
    document.getElementById("speedtest").onclick = " ";
    console.log("Inside speedtest");

    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            parse_results(this);
        }
    };
    xhttp.open("GET", '/run_speedtest', true);
    xhttp.send();
}

function parse_results(xhttp) {
    var data = JSON.parse(xhttp.responseText);

    var isp = data["isp"];
    document.getElementById("isp").innerHTML = isp;

    var ping_latency = parseFloat(data["ping"]["latency"]).toFixed(2);
    document.getElementById("ping_latency").innerHTML = String(ping_latency) + ' ms';

    var download = (parseFloat(data["download"]["bandwidth"]) / 125000).toFixed(2);
    document.getElementById("download").innerHTML = String(download) + ' Mbps';

    var upload = (parseFloat(data["upload"]["bandwidth"]) / 125000).toFixed(2);
    document.getElementById("upload").innerHTML = String(upload) + ' Mbps';

    var packet_loss = parseFloat(data["packetLoss"]).toFixed(2);
    document.getElementById("packet_loss").innerHTML = String(packet_loss) + '%';

    document.getElementById("speedtest").innerHTML = "Speedtest";
    document.getElementById("speedtest").onclick = "run_speedtest()";
}