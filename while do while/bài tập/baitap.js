
function bai_1() {
    //Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộng thoại thông báo
    // for(let i=1;i<=100;i++){
    //     document.write(i +"<br>")
    //     if(i==99){
    //         alert("Xin chúc mừng")
    //     }
    // }
    let i = 0;
    while (i < 100) {
        document.write(i + "<br>");
        i++;
        if (i == 99) {
            alert("Xin chúc mừng!");
        }
    }
}

function bai_2() {
    let nhietdo = Number(prompt("Nhập vào nhiệt độ"))
    while (nhietdo < 20 || nhietdo > 100) {
        if (nhietdo < 20) {
            alert("Nhiệt độ quá lạnh")
            nhietdo = Number(prompt("Nhập vào nhiệt độ"))
        } else if (nhietdo > 100) {
            alert("Nhiệt độ quá nóng")
            nhietdo = Number(prompt("Nhập vào nhiệt độ"))
        }
    }
    alert("Nhiệt độ bình thường")
}

function bai_3() {
    // Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
    
    let F = 0, F0 = 0, F1 = 0
    let fibonacci = "";
    for (let i = 0; i < 20; i++) {
        if (i == 0) {
            F = 1
            F1 = 1
            fibonacci += F + " "
        } else {
            // 

            F = F0 + F1
            F0 = F1
            F1 = F
            fibonacci += F + " "
            console.log(i + " = " + F)
        }
    }
    document.write( "<b>20 số trong dãy fibonacci đầu tiên là: </b>"+fibonacci)
}

function bai_4() {
    // Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
    let F = 0, F0 = 0, F1 = 0
    let chia5 = ""
    let fibonacci = "";
    for (let i = 0; i < 20; i++) {
        if (i == 0) {
            F = 1
            F1 = 1
            fibonacci += F + " "
        } else {

            F = F0 + F1
            F0 = F1
            F1 = F
            fibonacci += F + " "
            console.log(i + " = " + F)
            if (F % 5 == 0) {
                chia5 = F
                break;
            }
        }
    }

    document.write("Sô chia hết cho 5 trong dãy là " + chia5)
}

function bai_5() {
    // Tính tổng của 20 số đầu tiên trong dãy fibonacci.
    let F = 0, F0 = 0, F1 = 0, tong = 0
    let fibonacci = "";
    for (let i = 0; i < 20; i++) {
        if (i == 0) {
            F = 1
            F1 = 1
            fibonacci += F + " "
            tong += F
        } else {
            F = F0 + F1
            F0 = F1
            F1 = F
            fibonacci += F + " "
            tong += F
            console.log(i + " = " + F)
        }
    }
    document.write("Dãy Fibonacci là " + fibonacci + "<br>")
    document.write("Tổng của các số = " + tong)
}

function bai_6() {
    let count = 0, tong = 0
    let dayso = ""
    for (let i = 1; ; i++) {
        if (i % 7 == 0) {
            dayso += i + " "
            console.log(dayso)
            tong += i
            count++
            if (count == 30) break
        }
    }
    document.write(dayso + "<br>")
    document.write("Tổng bằng " + tong)
}

function bai_7() {
    document.write("Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra \"Fizz\", 5 thì in ra \"Buzz\" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ \"FizzBuzz\".<br>")
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            document.write(i + " FizzBuzz <br>")
        } else {
            if (i % 3 == 0) {
                document.write(i + " Fizz <br>")
            }
            else if (i % 5 == 0) {
                document.write(i + " Buzz <br>")
            }
        }
    }
}

function bai_8() {
    let phamvi = Number(prompt("Trò chơi đoán số từ 0 - "))
    let nhapso = Number(prompt("Nhập vào số muốn đoán"))
    let soRamdom
    if (phamvi) {
        soRamdom = Math.floor(Math.random() * phamvi)
        if (soRamdom == nhapso) {
            alert("Bạn đã đoán đung")
        } else {
            while (soRamdom != nhapso) {
                alert("Bạn đoán sai số đúng là " + soRamdom)
                nhapso = Number(prompt("Nhập vào số muốn đoán"))
            }
            alert("Bạn đoán đúng")
        }
    }
}