const number = document.querySelectorAll(".number");
const opirations = document.querySelectorAll(".opirations");
const clear = document.querySelectorAll(".clear");
const windows = document.querySelector(".window");
const dot = document.querySelector(".dot");

(memoryCurrentNumber = 0),
  (memoryNewNumber = false),
  (memoryPendingOperation = "");

console.log(number);

opirations.forEach((opirations) => {
  opirations.addEventListener("click", (e) => {
    opirationsPress(e.target.textContent);
  });
});
clear.forEach((clear) => {
  clear.addEventListener("click", (e) => {
    clearPress(e.target.textContent);
  });
});

dot.addEventListener("click", dotPress);

number.forEach((number) => {
  number.addEventListener("click", (e) => {
    numberPress(e.target.textContent);
  });
});
function numberPress(number) {
  console.log(memoryNewNumber);
  if (memoryNewNumber) {
    windows.value = number;
    memoryNewNumber = false;
  } else {
    if (windows.value === "0") {
      windows.value = number;
    } else {
      windows.value += number;
    }
  }
}
const opirationsPress = (symbol) => {
  let localMemoryNumber = windows.value;
  if (memoryNewNumber && memoryPendingOperation !== "=") {
    windows.value = memoryCurrentNumber;
  } else {
    memoryNewNumber = true;
    if (memoryPendingOperation === "+") {
      memoryCurrentNumber += +localMemoryNumber;
    } else if (memoryPendingOperation === "X") {
      memoryCurrentNumber *= +localMemoryNumber;
    } else if (memoryPendingOperation === "/") {
      memoryCurrentNumber /= +localMemoryNumber;
    } else if (memoryPendingOperation === "-") {
      memoryCurrentNumber -= +localMemoryNumber;
    } else {
      memoryCurrentNumber = +localMemoryNumber;
    }
    windows.value = memoryCurrentNumber;
    memoryPendingOperation = symbol;
  }
};
//  const clearAll = (op) {
//      if (op=='CE') {
//      windows.value='';
//         memoryNewNumber=true
//     }else if (id === "CE") {
//     windows.value = "0";
//     memoryNewNumber = true;
//     memoryCurrentNumber = "0";
//     memoryPendingOperation = "0";
//  }
// }
function clearPress(op) {
  if (op === "AC") {
    windows.value = "0";
    memoryNewNumber = true;
  } else if (op === "AC") {
    windows.value = "0";
    memoryNewNumber = true;
    memoryCurrentNumber = "0";
    memoryPendingOperation = "0";
  }
}
function dotPress() {
  let localDecimalMemory = windows.value;
  if (localDecimalMemory === "0") {
    localDecimalMemory += ".";
    memoryNewNumber = false;
  } else {
    if (!localDecimalMemory.includes(".")) {
      localDecimalMemory += ".";
    }
  }
  windows.value = localDecimalMemory;
}
