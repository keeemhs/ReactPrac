let value: string | number = '안녕하세요';
value = 100;

// 함수에 모든 값이 들어 올 수 있다 => 재네릭 타입 사용
function getValue(val: string | number | object) {
    return val;
}
getValue('hi');

// 제네릭 타입으로 변경
function getValue2<T>(value: T) {
    return value;
}
