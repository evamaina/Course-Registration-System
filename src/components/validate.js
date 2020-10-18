// validator performs regex tests on the user inputs

const regTests = {
    firstName: /([^\s])/,
    lastName: /([^\s])/,
    registrationNumber: /([^\s])/,
    cohort: /^(morning|afternoon|evening)$/,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
}
export const validator = (name, value) => {
    return regTests[name].test(value)
}