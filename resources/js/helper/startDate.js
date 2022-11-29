export default  (item) => {
    let now = new Date(item);
    let st = `
            ${now.getUTCFullYear().toString()}
             /${(now.getUTCMonth() + 1).toString()}
             /${now.getUTCDate()}
        `;
    return st;
};
