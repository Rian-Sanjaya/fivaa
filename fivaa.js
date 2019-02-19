const fivaa = (num) => {
    for (let i = num; i > 0; i--) {
        let y = '';
        for (let j = 0; j < i; j++) {
            y += i + 1;
        }
        x = '' + (i - 1) + (i - 1);
        console.log(x + y);
    }
}

fivaa(5);