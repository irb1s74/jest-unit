export const delay = (collback, time) => (
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(collback())
        }, time)
    })
)


