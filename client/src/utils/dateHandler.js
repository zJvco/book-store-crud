export function convertDatetimeToLocaleDateStringFormat(date) {
    return new Date(date).toLocaleDateString()
}

export function convertSlashInHyphen(date) {
    return date.replace(/[\\/]/g, "-");
}