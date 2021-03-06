class Validator {
    static isEmail(email) {
        const regex =
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

        return regex.test(String(email).toLowerCase());
    }

    static isDomain(domain) {
        const regex =
            /(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

        return regex.test(String(domain).toLowerCase());
    }

    static isDate(date) {
        const regex =
            /^(?:(?:31([\/\-.])(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

        return regex.test(date);
    }

    static isPhone(phone) {
        const regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

        return regex.test(phone);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    console.log(Validator.isEmail("phphtml@mail.ru"));
    console.log(Validator.isDate("12.05.2020"));
    console.log(Validator.isDomain("dota2.ru"));
    console.log(Validator.isPhone("123-456-7890"));

});