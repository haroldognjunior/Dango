import Swal from 'sweetalert2';

export function FontSizeChange(number: number) {
  let elements: any = document.getElementsByClassName('product-title');
  for (let elem of elements) {
    elem.style.fontSize = `${number}px`;
  }
}

export function FontSizeIncrease(number: number, setFontSize: any) {
  if (number <= 36) {
    setFontSize(number + 1);
  } else {
    Swal.fire({
      title: "Action isn't allowed",
      text: `It's the limit!`,
      icon: 'error',
      confirmButtonText: 'Ok!'
    });
  }
}

export function FontSizeDecrease(number: number, setFontSize: any) {
  if (number >= 6) {
    setFontSize(number - 1);
  } else {
    Swal.fire({
      title: "Action isn't allowed",
      text: `It's the limit!`,
      icon: 'error',
      confirmButtonText: 'Ok!'
    });
  }
}
