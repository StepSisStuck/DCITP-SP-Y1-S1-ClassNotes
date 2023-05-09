var msg = "";
for (var d = 0; d < 5; d += 1) {
if (d % 2 == 1) {
for (var e = 1; e <= d; e++) {
msg += e;
}
}
msg += "\n";
for (var f = 6; f > 2; f-=2) {
msg += f;
}
}
console.log(msg);