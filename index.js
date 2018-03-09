//查找一个数组中的最大、最小值
const arrayMax = arr => Math.max(...arr);
const arrayMin = arr => Math.min(...arr);
// 过滤数组中一些错误的值
const compact = arr => arr.filter(Boolean);
// 查询数组中一个值得出现次数
const countNum = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);


// 判断b 数组不含a 数组不同的值
const difference = (a, b) => {
    const s = new Set(b);
    return a.filter(x => {
        !s.has(x)
    })
}

//  数组去重
const distinctValuesOfArray = arr => [...new Set(arr)];

// 姓名掩码
const maskname = (name) => {
    if (name.length === 2) {
        return '*' + name.substr(1, name.length - 1);
    } else if (name.length > 2) {
        var mid = '';
        for (let i = 1; i < name.length - 1; i++) {
            mid = mid + '*';
        }
        return name[0] + mid + name[name.length - 1];
    } else {
        return name;
    }
}

// 手机掩码
const maskTelephone = (phone) => {
    return phone.substr(0, 3) + '****' + phone.substr(7, 4)
}
const hideMobile = (mobile) => {
        if (!mobile || mobile.length != 11) {
            return mobile;
        }
        return mobile.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
    },


    // 身份证掩码
    const maskID = (id) => {
        let mid = '';
        for (let i = 3; i < id.length - 3; i++) {
            mid = mid + '*';
        }
        return id.substr(0, 3) + mid + id.substr(id.length - 3, 3);
    }
const hideId = (id) => {
    if (!id || id.length != 18) {
        return id;
    }
    return id.replace(/(\d{3})\d{12}(\d{3}|\d{2}[X|x])/, '$1************$2');
}

// es8迭代器

const justjavc = {
    [Symbol.iterator]: () => {

        const items = [`j`, `u`, `s`, `t`, `j`, `a`, `v`, `a`, `c`];
        return {
            next: () => Promise.resolve({
                done: items.length === 0,
                value: items.shift()
            })
        }
    }
}

(async function () {
    for await (const item of justjavc) {
        console.log(item)
    }
})()
