function telephoneCheck(str) {
    return (str.length > 9 && str.length < 14) && /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/.test(str);
}
telephoneCheck("555-555-5555");