export default function (str) {
    try {
        JSON.parse(decodeURIComponent(str))
    } catch (e) {
        return false;
    }
    return true;
};
