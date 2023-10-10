/* ----------------------- activity1 ------------------------- */
// let olimpic_newgame: readonly [object, boolean];

// olimpic_newgame = [
//     {
//         name: '쇼트트랙',
//         type: '혼성 계주',
//     },
//     true,
// ];

// // olimpic_newgame[1] = false;

/* ----------------------- activity2 ------------------------- */
// interface Game {
//     title: string;
//     price: number;
//     desc?: string;
//     category: string;
//     platform: string;
// }
// let heroGame_A: Game = {
//     title: 'DC 언체인드',
//     price: 50000,
//     desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
//     category: '액션',
//     platform: '모바일',
// };
// let heroGame_B: Game = {
//     title: 'MARVEL 퓨처파이트',
//     price: 65000,
//     category: '롤플레잉',
//     platform: '모바일',
// };

/* ----------------------- activity3 ------------------------- */
function sum1(a: number, b: number) {
    console.log(a + b);
}
sum1(5, 11);

const sum2 = (...number: number[]) => {
    return number.reduce((acc, cur) => acc + cur, 0);
};
console.log(sum2(1, 2, 3, 4, 10));
