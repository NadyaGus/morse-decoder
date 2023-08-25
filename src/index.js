const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) { // expr = expression - выражение
    //создать новый массив с помощью метода .push добалвять .slice по 10 символов с помощью цикла for пр.[0000000000, 0101010101]
    //сделать строчку из массива пр. "0000000000, 0101010101" + "," (добавить запятую в конце)
    //заменить значения цифр с запятой (0000000000,) на буквы
    

    // сделала массив
    let array = [];
    for (let i = 0; i < expr.length; i += 10) {
        array.push(expr.slice(i, i + 10));
    }

    let strArray = array.toString() + ","; // сделала из массива строчку с запятой в конце
    
    let a = strArray.replaceAll('0000001011,', 'a');
    let b = a.replaceAll('0011101010,', 'b');
    let c = b.replaceAll('0011101110,', 'c');
    let d = c.replaceAll('0000111010,', 'd');
    let e = d.replaceAll('0000000010,','e');
    let f = e.replaceAll('0010101110,','f');
    let g = f.replaceAll('0000111110,','g');
    let h = g.replaceAll('0010101010,','h');
    let i = h.replaceAll('0000001010,','i');
    let j = i.replaceAll('0010111111,','j');
    let k = j.replaceAll('0000111011,','k');
    let l = k.replaceAll('0010111010,','l');
    let m = l.replaceAll('0000001111,','m');
    let n = m.replaceAll('0000001110,','n');
    let o = n.replaceAll('0000111111,','o');
    let p = o.replaceAll('0010111110,','p');
    let q = p.replaceAll('0011111011,','q');
    let r = q.replaceAll('0000101110,','r');
    let s = r.replaceAll('0000101010,','s');
    let t = s.replaceAll('0000000011,','t');
    let u = t.replaceAll('0000101011,','u');
    let v = u.replaceAll('0010101011,','v');
    let w = v.replaceAll('0000101111,','w');
    let x = w.replaceAll('0011101011,','x');
    let y = x.replaceAll('0011101111,','y');
    let z = y.replaceAll('0011111010,','z');
    let one = z.replaceAll('1011111111,', '1');
    let two = one.replaceAll('1010111111,', '2');
    let three = two.replaceAll('1010101111,', '3');
    let four = three.replaceAll('1010101011,', '4');
    let five = four.replaceAll('1010101010,', '5');
    let six = five.replaceAll('1110101010,', '6');
    let seven = six.replaceAll('1111101010,', '7');
    let eight = seven.replaceAll('1111111010,', '8');
    let nine = eight.replaceAll('1111111110,', '9');
    let zero = nine.replaceAll('1111111111,', '0');
    let space = zero.replaceAll('**********,', ' ')

    return space;

}

module.exports = {
    decode
}