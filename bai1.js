const gameEvents = new Map([
    [17, '⚽ Goal'],
    [36, '🔄️ Substitution'],
    [47, '🟨 Yellow card'],
    [61, '⚽ Goal'],
    [64, '🔄️ Substitution'],
    [69, '🟥 Red card'],
    [70, '🔄️ Substitution'],
    [72, '🔄️ Substitution'],
    [76, '⚽ Goal'],
    [80, '⚽ Goal'],
    [92, '🟨 Yellow card'],
]);
//1. Hãy tạo ra 1 mảng các sự kiện khác nhau xảy ra trong suốt trận đấu (lưu ý là không trùng nhau)
const events = [...new Set(gameEvents.values()),];
console.log(events);

//2. Sau khi trò chơi kết thúc, phát hiện ra rằng thẻ vàng phút 64 là không đúng. Hãy xóa nó khỏi danh sách sự kiện trong trận đấu.
gameEvents.delete(64);

//3. In ra console theo định dang như sau:"1 sự kiện xảy ra, trung bình mỗi 9 phút". Lưu ý răng mỗi trận đấu có 90 phút.
console.log(
    `1 sự kiện xảy ra, trung bình mỗi ${time / gameEvents.size}  phút.`
);


//4. Lặp toàn bộ mảng sự kiện và in ra màn hình, đánh dấu đối với mỗi sự kiện trong trận đấu diễn ra trong hiệp 1 hay hiệp 2,
for(const [min, events] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${events})`)
}