export default function formatoFecha(date) {

    let day = date.getDate();
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    if (month < 10) {
        return `0${month}/${year}`;
    } else {
        return `${month}/${year}`;
    }

}