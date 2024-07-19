export const posts = () => {
    return fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${import.meta.env.VITE_SECRET_KEY}`);
}

export const github = () => {
    return fetch(`https://api.github.com/users/${import.meta.env.VITE_USER}/repos`)
}