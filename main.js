// *---------------- Global Variables ----------------*

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const inputIndex1 = document.querySelector(
  ".accordion-item-6 .accordion-body .form-input-1 #input1"
);
const inputIndex2 = document.querySelector(
  ".accordion-item-6 .accordion-body .form-input-2 #input2"
);

const readOnlyBai8 = document.querySelector("#bai8");
const btnThemSo = document.querySelector("#btn1");
const btnClear = document.querySelector("#btn3");
const btn5RandomNum = document.querySelector("#btn10");
const btnResult = document.querySelectorAll(".accordion-body .btn");
const alert = document.querySelectorAll(".accordion-body .alert");

// *---------------- Other Variables ----------------*

let numList = [];

// *---------------- Helper Functions ----------------*

function isPrime(x) {
  if (x > 1 && Number.isInteger(x)) {
    for (let i = 2; i < x; i++) {
      if (x % i == 0) {
        return false;
      }
    }

    return true;
  } else {
    return false;
  }
}

function deleteDup(array) {
  let length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (array[i] === array[j]) {
        array.splice(i, 1);
      }
    }
  }

  return array;
}

// *---------------- EventListener ----------------*

// *Button for adding a number
btnThemSo.addEventListener("click", () => {
  let inputValue = input1.value;

  if (inputValue === "") {
  } else {
    numList.push(inputValue);
    input2.value = `[${numList.join(", ")}]`;
    input1.value = "";
  }

  readOnlyBai8.value = `${numList}`;
});

// *Button for adding 5 numbers
btn5RandomNum.addEventListener("click", () => {
  let chance;
  let result = 0;

  for (let i = 0; i < 5; i++) {
    chance = Math.floor(Math.random() * 4);
    switch (chance) {
      case 0:
        result = (Math.random() * 101).toFixed(2);
        break;
      case 1:
        result = (Math.random() * 101).toFixed(2) * -1;
        break;

      case 2:
        result = Math.floor(Math.random() * 101) * -1;
        break;

      case 3:
        result = Math.floor(Math.random() * 101);
        break;
    }

    numList.push(result);
  }

  let newArray = deleteDup(numList);

  input2.value = `[${newArray.join(", ")}]`;
  readOnlyBai8.value = `${numList}`;
});

// *Button for clearing
btnClear.addEventListener("click", () => {
  numList = [];
  input2.value = 0;
  input1.value = "";
  let length = alert.length;
  for (let i = 0; i < length; i++) {
    alert[i].innerHTML = ``;
    alert[i].classList.add("alert-secondary");
    alert[i].classList.remove("alert-success");
    alert[i].classList.remove("alert-danger");
  }
  readOnlyBai8.value = ``;
});

// *Tính Tổng Số Dương
btnResult[0].addEventListener("click", () => {
  if (numList[0] === undefined) {
    alert[0].classList.remove("alert-secondary");
    alert[0].classList.add("alert-danger");
    alert[0].innerHTML = `<p>❌ Mảng Rỗng</p>`;
  } else {
    let sum = 0;
    let length = numList.length;
    for (let i = 0; i < length; i++) {
      if (numList[i] * 1 > 0) {
        sum += numList[i] * 1;
      }
    }

    alert[0].classList.remove("alert-danger");
    alert[0].classList.add("alert-success");
    alert[0].innerHTML = `<p>✔ Tổng Giá Trị Số Dương: ${sum.toFixed(2)}</p>`;
  }
});

// *Đếm Số Dương
btnResult[1].addEventListener("click", () => {
  if (numList[0] === undefined) {
    alert[1].classList.remove("alert-secondary");
    alert[1].classList.add("alert-danger");
    alert[1].innerHTML = `<p>❌ Mảng Rỗng</p>`;
  } else {
    let count = 0;
    let length = numList.length;
    for (let i = 0; i < length; i++) {
      if (numList[i] > 0) {
        count++;
      }
    }
    alert[1].classList.remove("alert-danger");
    alert[1].classList.add("alert-success");
    alert[1].innerHTML = `<p>✔ Có <strong style="color: darkgreen">${count}</strong> Số Dương</p>`;
  }
});

// *Tìm Số Nhỏ Nhất
btnResult[2].addEventListener("click", () => {
  if (numList[0] === undefined) {
    alert[2].classList.remove("alert-secondary");
    alert[2].classList.add("alert-danger");
    alert[2].innerHTML = `<p>❌ Mảng Rỗng</p>`;
  } else {
    let smallestNum = Infinity;
    let length = numList.length;
    for (let i = 0; i < length; i++) {
      if (smallestNum > numList[i]) {
        smallestNum = numList[i];
      }
    }

    alert[2].classList.remove("alert-danger");
    alert[2].classList.add("alert-success");
    alert[2].innerHTML = `<p>✔ Số Nhỏ Nhất Trong Mảng: ${smallestNum}</p>`;
  }
});

// *Tìm Số Dương Nhỏ Nhất
btnResult[3].addEventListener("click", () => {
  if (numList[0] === undefined) {
    alert[3].classList.remove("alert-secondary");
    alert[3].classList.add("alert-danger");
    alert[3].innerHTML = `<p>❌ Mảng Rỗng</p>`;
  } else {
    let smallestPosNum = Infinity;
    let length = numList.length;

    // *Find the smallest positive number
    for (let i = 0; i < length; i++) {
      if (smallestPosNum > numList[i] && numList[i] > 0) {
        smallestPosNum = numList[i];
      }
    }

    if (smallestPosNum == Infinity) {
      alert[3].classList.remove("alert-secondary");
      alert[3].classList.add("alert-danger");
      alert[3].innerHTML = `<p>❌ Không Tìm Thấy Số Dương Nhỏ Nhất Trong Mảng</p>`;
    } else {
      alert[3].classList.remove("alert-danger");
      alert[3].classList.add("alert-success");
      alert[3].innerHTML = `<p>✔ Số Dương Nhỏ Nhất: ${smallestPosNum}</p>`;
    }
  }
});

// *Tìm Số Chẵn Cuối Cùng
btnResult[4].addEventListener("click", () => {
  if (numList[0] === undefined) {
    alert[4].classList.remove("alert-secondary");
    alert[4].classList.add("alert-danger");
    alert[4].innerHTML = `<p>❌ Mảng Rỗng</p>`;
  } else {
    let evenNum = 0;
    let length = numList.length;

    // *Find prime number by looping
    for (let i = length - 1; i >= 0; i--) {
      if (numList[i] % 2 === 0) {
        evenNum = numList[i];
        break;
      }
    }

    if (evenNum == 0) {
      alert[4].classList.remove("alert-secondary");
      alert[4].classList.add("alert-danger");
      alert[4].innerHTML = `<p>❌ Không Tìm Thấy Số Chẵn Cuối Cùng</p>`;
    } else {
      alert[4].classList.remove("alert-danger");
      alert[4].classList.add("alert-success");
      alert[4].innerHTML = `<p>✔ Số Chẵn Cuối Cùng: ${evenNum}</p>`;
    }
  }
});

// *Đổi Chỗ
btnResult[5].addEventListener("click", () => {
  if (numList[0] === undefined) {
    alert[5].classList.remove("alert-secondary");
    alert[5].classList.add("alert-danger");
    alert[5].innerHTML = `<p>❌ Mảng Rỗng</p>`;
  } else {
    let value1 = inputIndex1.value * 1;
    let value2 = inputIndex2.value * 1;
    let tempNum = 0;

    // *Swap value
    tempNum = numList[value1];
    numList[value1] = numList[value2];
    numList[value2] = tempNum;

    if (tempNum <= 0) {
      alert[5].classList.remove("alert-secondary");
      alert[5].classList.add("alert-danger");
      alert[5].innerHTML = `<p>❌ Không Tìm Thấy Số</p>`;
    } else {
      alert[5].classList.remove("alert-danger");
      alert[5].classList.add("alert-success");
      alert[5].innerHTML = `<p>[${numList.join(", ")}]</p>`;
    }
  }
});

// *Sắp Xếp Theo Thứ Tự Tăng Dần
btnResult[6].addEventListener("click", () => {
  if (numList[0] === undefined) {
    alert[6].classList.remove("alert-secondary");
    alert[6].classList.add("alert-danger");
    alert[6].innerHTML = `<p>❌ Mảng Rỗng</p>`;
  } else {
    let tempNum;
    let length = numList.length;
    for (let i = 0; i < length; i++) {
      for (let j = i + 1; j < length; j++) {
        if (numList[i] * 1 > numList[j] * 1) {
          tempNum = numList[i];
          numList[i] = numList[j];
          numList[j] = tempNum;
        }
      }
    }

    alert[6].classList.remove("alert-danger");
    alert[6].classList.add("alert-success");
    alert[6].innerHTML = `<p>[${numList.join(", ")}]</p>`;
    readOnlyBai8.value = `${numList}`;
  }
});

// *Tìm Số Nguyên Tố Đầu Tiên
btnResult[7].addEventListener("click", () => {
  if (numList[0] === undefined) {
    alert[7].classList.remove("alert-secondary");
    alert[7].classList.add("alert-danger");
    alert[7].innerHTML = `<p>❌ Mảng Rỗng</p>`;
  } else {
    let tempNum = 0;
    let length = numList.length;
    for (let i = 0; i < length; i++) {
      if (isPrime(numList[i] * 1)) {
        tempNum = numList[i];
        break;
      }
    }

    if (tempNum == 0) {
      alert[7].classList.remove("alert-secondary");
      alert[7].classList.add("alert-danger");
      alert[7].innerHTML = `<p>❌ Không Tìm Thấy Số Nguyên Tố</p>`;
    } else {
      alert[7].classList.remove("alert-danger");
      alert[7].classList.add("alert-success");
      alert[7].innerHTML = `<p>Số Nguyên Tố Đầu Tiên: ${tempNum}</p>`;
    }
  }
});

// *Đếm Số Nguyên
btnResult[8].addEventListener("click", () => {
  if (numList[0] === undefined) {
    alert[8].classList.remove("alert-secondary");
    alert[8].classList.add("alert-danger");
    alert[8].innerHTML = `<p>❌ Mảng Rỗng</p>`;
  } else {
    let tempNum = 0;
    let length = numList.length;
    for (let i = 0; i < length; i++) {
      if (Number.isInteger(numList[i] * 1)) {
        tempNum++;
      }
    }
    alert[8].classList.remove("alert-danger");
    alert[8].classList.add("alert-success");
    alert[8].innerHTML = `<p>Có <strong style="color: darkgreen">${tempNum}</strong> Nguyên Trong Mảng</p>`;
  }
});

// *So Sánh Số Dương và Số Âm
btnResult[9].addEventListener("click", () => {
  if (numList[0] === undefined) {
    alert[9].classList.remove("alert-secondary");
    alert[9].classList.add("alert-danger");
    alert[9].innerHTML = `<p>❌ Mảng Rỗng</p>`;
  } else {
    let positiveNum = 0;
    let negativeNum = 0;
    let length = numList.length;
    for (let i = 0; i < length; i++) {
      if (numList[i] * 1 > 0) {
        positiveNum++;
      } else if (numList[i] * 1 < 0) {
        negativeNum++;
      }
    }

    alert[9].classList.remove("alert-danger");
    alert[9].classList.add("alert-success");

    if (positiveNum > negativeNum) {
      alert[9].innerHTML = `<p>Số Dương<strong style="color: darkgreen"> > </strong>Số Âm</p>`;
    } else if (positiveNum < negativeNum) {
      alert[9].innerHTML = `<p>Số Dương<strong style="color: darkgreen"> < </strong>Số Âm</p>`;
    } else {
      alert[9].innerHTML = `<p>Số Dương<strong style="color: darkgreen"> = </strong>Số Âm</p>`;
    }
  }
});
