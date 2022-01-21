/**
 *
 * @param {callback} predicate
 * @param {callback} onSuccess
 * @param {callback} onFail
 */
function check(predicate, onSuccess, onFail) {
    if (predicate()) {
        onSuccess('yes');
    } else {
        onFail('no');
    }
}

module.exports = check;
