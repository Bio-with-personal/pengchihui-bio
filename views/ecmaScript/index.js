import { Box } from '@chakra-ui/core'

export const EcmaScript = () => {
    // 字符串扩展  字符串模板  标签模板 过滤 HTML 字符串，防止用户输入恶意内容
    for (let result of 'bingkingweixiao') {
        // console.log(result)
    }
    const myBooks = [{ title: '123456', author: "45678" }]
    let libraryHtml = `
            <ul>
            #for book in #{myBooks}
                <li><i>#{book.title}</i> by #{book.author}</li>
            #end
            </ul>
        `;
    //正则的扩展 字符串正则方式 math replace search split
    //g修饰符会忽略非法字符，而y修饰符不会
    var regex = new RegExp('xyzz', 'i').flags;
    var regexps = /x|y|z/gy
    var tokey_y = /\s*(\+|[0-9]+)\s/y
    var tokey_g = /\s*(\+|[0-9]+)\s/g
    const strName = 'stringnamex'.replace(regexps, '123456')
    function tokenize(TOKEN_REGEX, str) {
        let result = [];
        let match;
        while (match = TOKEN_REGEX.exec(str)) {
            result.push(match[1]);
        }
        return result;
    }
    // console.log(tokenize(tokey_y, '3+4'))
    var regExpText = /\s(\+|[0-9]+)\s/ig.source
    var modifier = /abc/ig.flags
    // console.log("正文", regExpText, "修饰符", modifier)
    //日期拆分
    const re_date = /(\d{4})-(\d{2})-(\d{2})/
    const matchobj = re_date.exec('2019-04-25')
    const year = matchobj[1]
    const month = matchobj[2]
    const day = matchobj[3]
    const arrDate = ['2020-04-26', '2021-04-23', '2021-12-17']
    const dataYear = []
    const dataMouth = []
    const dataDay = []
    for (var i = 0; i < arrDate.length; i++) {
        const nowDateArr = re_date.exec(arrDate[i])
        dataYear.push(nowDateArr[1])
        dataMouth.push(nowDateArr[2])
        dataDay.push(nowDateArr[3])
    }
    //后面覆盖前面的
    const dataArray = { ...dataYear, ...dataMouth, ...dataDay }
    // console.log(dataArray)
    var dateRegExp = /(?<years>\d{4})-(?<months>\d{2})-(?<days>\d{2})/
    //替换日期格式
    // console.log('2018-06-24'.replace(dateRegExp, '$<days>/$<months>/$<years>'))
    const RE_TWICE = /^(?<word>[a-z]+)!\k<word>$/;
    RE_TWICE.test('abc!abc') // true
    RE_TWICE.test('abc!ab') // false

    //数值
    Number.isNaN(NaN) // true
    Number.isNaN("NaN") // false
    Number.isNaN(1) // false

    // ES5的写法
    parseInt('12.34') // 12
    parseFloat('123.45#') // 123.45

    // ES6的写法  逐步减少全局性方法，使得语言逐步模块化
    //JavaScript 内部，整数和浮点数采用的是同样的储存方法，所以 25 和 25.0 被视为同一个值。
    Number.parseInt('12.34') // 12
    Number.parseFloat('123.45#').toFixed(2) // 123.45
    Number.isInteger(25) // true
    Number.isInteger(25.0) // true

    //出去小数部分 保留整数部分
    Math.trunc(NaN);      // NaN
    Math.trunc('foo');    // NaN
    Math.trunc();         // NaN
    Math.trunc(undefined) // NaN

    //函数扩展  解构赋值
    function foo({ x, y = 5 } = {}) {
        console.log(x, y);
    }
    foo({}) // undefined 5
    foo({ x: 1 }) // 1 5
    foo({ x: 1, y: 2 }) // 1 2

    function fetch(url, { body = '', method = 'GET', headers = {} }) {
        console.log(method);
    }
    fetch('http://example.com', {}) // "GET"
    fetch('http://example.com')  // 报错
    //双层默认值
    function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {
        console.log(method);
    }
    fetch('http://example.com')  // "GET"

    //默认值是空对象，但是设置了对象解构赋值的默认值
    function m1({ x = 0, y = 0 } = {}) {
        return [x, y]
    }
    //默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值
    function m2({ x, y } = { x: 0, y: 0 }) {
        return [x, y]
    }
    // 函数没有参数的情况
    m1() // [0, 0]
    m2() // [0, 0]

    // x 和 y 都有值的情况
    m1({ x: 3, y: 8 }) // [3, 8]
    m2({ x: 3, y: 8 }) // [3, 8]

    // x 有值，y 无值的情况
    m1({ x: 3 }) // [3, 0]
    m2({ x: 3 }) // [3, undefined]

    // x 和 y 都无值的情况
    m1({}) // [0, 0];
    m2({}) // [undefined, undefined]

    m1({ z: 3 }) // [0, 0]
    m2({ z: 3 }) // [undefined, undefined]

    //调用函数f时，参数形成一个单独的作用域。在这个作用域里面，默认值变量x指向第一个参数x，而不是全局变量x，所以输出是2。
    var x = 1;
    function f(x, y = x) {
        console.log(y);
    }
    f(2) // 2
    //多余参数的和
    function add(...values) {
        let sum = 0
        for (var result of values) {
            sum += result
        }
        return sum
    }
    // console.log(add(2, 23, 4))//29
    //规避严格模式  第一种是设定全局性的严格模式，这是合法的   第二种是把函数包在一个无参数的立即执行函数里面。
    function doSomething(a, b) {
        'use strict';
    }
    //箭头函数
    // 正常函数写法
    [1, 2, 3].map(function (x) {
        return x * x;
    });
    // 箭头函数写法
    [1, 2, 3].map(x => x * x);

    function Timer() {
        this.s1 = 0;
        this.s2 = 0;
        // 箭头函数
        setInterval(() => this.s1++, 1000);
        // 普通函数
        setInterval(function () {
            this.s2++;
        }, 1000);
    }

    var timer = new Timer();

    setTimeout(() => console.log('s1: ', timer.s1), 3100);
    setTimeout(() => console.log('s2: ', timer.s2), 3100);

    //递归
    function factorial(n, total) {
        if (n === 1) return total
        return factorial(n - 1, n * total);
    }
    factorial(5, 1) // 120
    //html属性分隔开

    return (
        <Box>{libraryHtml}</Box>
    )
}



export default EcmaScript