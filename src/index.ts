//Tell typescript what tye is coming if you know more then typescript

// let phone = document.getElementById('phone') as HTMLInputElement;
let phone = <HTMLInputElement>document.getElementById('phone');

phone.value;
