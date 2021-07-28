function test() {
    let t = +document.getElementById("toan").value;
    let a = +document.getElementById("anh").value;
    let v = +document.getElementById("van").value;
    let kv = document.getElementById("khu_vuc").value;
   
    switch (kv) {
        case "k1":
            document.getElementById("result").innerHTML = "Tổng điểm ĐH khối D của bạn là: " + (t + a + v + 0.75);

            break;
        case "k2nt":
            document.getElementById("result").innerHTML = "Tổng điểm ĐH khối D của bạn là: " + (t + a + v + 0.5);
            break;
        case "k2":
            document.getElementById("result").innerHTML = "Tổng điểm ĐH khối D của bạn là: " + (t + a + v + 0.25);
            break;
        case "k3":
            document.getElementById("result").innerHTML = "Tổng điểm ĐH khối D của bạn là: " + (t + a + v + 0);
            break;
    }
}