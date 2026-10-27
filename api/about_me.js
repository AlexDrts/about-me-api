const facts = [
    "Люблю котиков",
    "Любимый цвет - зеленый",
    "Люблю спать",
    "Люблю кодить",
    "Моего кота зовут Лунтик",
    "Мой кот серый",
    "Я не люблю скуку",
    "Мой кот весит 9 кг",
    "Люблю плавание",
    "Люблю пасту"
];

module.exports = (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.statusCode = 200;
    res.end(JSON.stringify({ name: "Alex", count: facts.length, facts }, null, 2));
};