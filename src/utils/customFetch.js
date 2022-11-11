let approved = true

export const customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (approved) {
                resolve(task)
            } else {
                reject('error')
            }
        }, time)
    })
}

export default customFetch