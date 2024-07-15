function power(x) {
    return x*x;
}

let arrowfunc = () => {
    console.log("arrow func");
}

function print(message) {
    console.log(message);
}

function print2(name, count) {
    if(!count) count = 5;

    console.log(`${name} 가 ${count}명 있습니다`);      // 따옴표가 아닌 ` 사용에 유의
}

function sum(min, max) {
    let output = 0;
    for(let i = min; i <= max; i++) {
        output += i;
    }
    return output;
}


function callTenTimes(callback) {
    for(let i = 0; i < 10; i++) {
        callback();
    }
}

callTenTimes(function () {
    console.log("함수 호출");
});


alert("한글한글");
console.log(power(10));
arrowfunc();
print("omg omg");
print(sum(1, 100));
print2("방게이", 5);
callTenTimes(arrowfunc);

let inputA = "517";
let inputB = "5.17"
let inputC = "5.17탄신일"

console.log(inputA);
console.log(parseInt(inputA));
console.log(parseInt(inputB));
console.log(parseFloat(inputB));
console.log(parseFloat(inputC));            // 숫자가 아닌 문자열은 알아서 짤려!

let intervalFunc = setInterval(function() {
    console.log("1초가 계속 지난다..");
}, 1000);

let timeoutFunc = setTimeout(function() {
    console.log("5초 지났다");
    clearInterval(intervalFunc);
}, 5000);

let array = ['사과', '바나나', '망고', '딸기'];     // 요소: 배열 내부에 있는 값 하나하나

let product = {                     // 딕셔너리나 map 처럼 사용하는 '객체'
    제품명: '7D 건조 망고',
    유형: '당절임',
    성분: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    원산지: '필리핀' 
};

console.log(product);   
console.log(product['제품명']);
console.log(product.제품명);

let object = {
    name: '바나나',
    price: 1200
}

console.log(object.name);
console.log(object.price);

for(let key in object) {                        // 속성: 객체 내부에 있는 값 하나하나
    console.log(`${key}: ${object[key]}`);
}

let obj = {
    name: '바나나',
    price: 1200,
    print: function() {
        console.log(`${this.name}의 가격은 ${this.price}원입니다.`);
    }
}

obj.print();

let products = [
    {name: '바나나', price: 1200},
    {name: '사과', price: 4321},
    {name: '망고', price: 5523},
    {name: '딸기', price: 5016},
    {name: '수박', price: 5017}
]

function printProducts(products) {
    console.log(`${products.name}의 가격은 ${products.price}원입니다.`);
}

for(let prd of products) {
    printProducts(prd);
}

function Products2(name, price) {
    this.name = name;
    this.price = price;
}

let product2 = new Products2("버네이너", 200);
console.log(product2);

Products2.prototype.print = function() {
    console.log(`${this.name}의 가격은 ${this.price}원입니다.`);
}

let products22 = [
    new Products2("빠나나", 4040),
    new Products2("빠나나1", 40401),
    new Products2("빠나나2", 40402),
    new Products2("빠나나3", 40403),
    new Products2("빠나나4", 40404),
    new Products2("빠나나5", 40405),
]

for(let prd of products22) {
    prd.print();
}

// Number 객체

/*
let primitiveNumber = 273;
primitiveNumber.method = function() {   // primitiveNumber가 '객체'가 아니라서 불가
    return 'Primitive Method';
}
console.log(primitiveNumber.method());
이건 안됩니다
*/

/*
let primitiveNumber = 273;
Number.method = function() {        // 기본 자료형에 프로토타입으로 메소드 추가
    return 'Primitive Method';
}
console.log(primitiveNumber.method());
*/
// 이건 된다했는데 안 되네요

let num = 517;
let num2 = new Number(517);
// toExpotential()      숫자를 지수 표시로 나타낸 문자열 리턴
// toFixed()            숫자를 고정소수점 표시로 나타낸 문자열 리턴
// toPrecision()        숫자를 길이에 따라 지수 표시 또는 고정소수점 표시로 나타낸 문자열 리턴

num = 517.7260517;
console.log(num.toFixed(1));
console.log(num.toFixed(4));
// MAX_VALUE / MIN_VALUE
// NaN  자바스크립트에서 나타낼 수 없는 숫자
// POSITIVE_INFINITY    NEGATIVE_INFINITY


// String 객체

let stringA = '손게이|2000kg';
let stringB = '방게이|1500kg';

console.log(stringA.split('|'));
console.log(stringB.split('|'));

// charAt(position)                             position에 위치하는 문자 리턴
// charCodeAt(position)                         position에 위치하는 문자의 유니코드 번호 리턴
// concat(args)                                 매개 변수로 입력한 문자열을 이어 리턴
// indexOf(searchString, position)              앞에서부터 일치하는 문자열의 위치 리턴
// lastIndexOf(searchString, position)          뒤에서부터 일치하는 문자열의 위치 리턴
// match(regExp)                                문자열 안에 regExp가 있는지 확인
// replace(regExp, Replacement)                 regExp를 replacement로 바꾼 후 리턴
// search(regExp)                               regExp와 일치하는 문자열의 위치 리턴
// slice(start, end)                            특정 위치의 문자열 추출해 리턴
// split(separator, limit)                      separator로 문자열을 잘라 배열 리턴
// substr(start, count)                         start부터 count만큼 문자열을 잘라 리턴
// substring(start, end)                        start부터 end까지 문자열을 잘라 리턴
// toLowerCase()                                문자열을 소문자로 바꾸어 리턴
// toUpperCase()                                문자열을 대문자로 바꾸어 리턴
// indexOf()                                    특정 문자열이 있는지 확인, 위치 리턴, 없으면 -1 리턴


// Date 객체

// new Date()                                                   현재 시간으로 Date 객체 생성
// new Date(유닉스 타임)                                         유닉스 타임(1970/1/1 00:00:00부터 경과한 밀리초로 Date 객체 생성)
// new Date(<시간 문자열>)                                       문자열로 Date 객체 생성
// new Date(<년>, <월-1>, <일>, <시간>, <분>, <초>, <밀리초>)     시간 요소(년, 월-1, 시간, 분, 초, 밀리초)를 기반으로 Date 객체 생성

let dateA = new Date();
let dateB = new Date(692213123123);
let dateC = new Date("May 17, 1996, 21:30:00");
let dateD = new Date(1996, 4, 17, 8, 0, 0, 0);      // 표기는 이렇게 해야 5월이 됨

console.log(dateA);
console.log(dateB);
console.log(dateC);
console.log(dateD);

// get / set + FullYear, Month, Date, Day, Hours, Minutes, Seconds 등

let dateE = new Date();
console.log(dateE);
dateE.setFullYear(dateE.getFullYear() + 2);
dateE.setMonth(dateE.getMonth() + 6);
dateE.setDate(dateE.getDate() + 15);
