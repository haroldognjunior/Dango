import Swal from 'sweetalert2';

export function Reduce(number: any) {
  let prices = number?.map(function (item: any) {
    let quantity = parseFloat(item.price) * parseFloat(item.quantity);
    return quantity;
  });
  const add = function (arr: any[]) {
    return arr?.reduce((a, b) => a + b, 0);
  };
  let sum = add(prices);
  return sum;
}

export function Delete(CartDataList: any) {
  return Swal.fire({
    title: 'Ops!',
    text: `You can't remove the ${CartDataList.name} in the cart because the challenge doesn't request this function`,
    icon: 'error',
    confirmButtonText: 'Ok!'
  });
}

export function Bye() {
  return Swal.fire({
    title: "That's all,  thanks for your visit!",
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  });
}
