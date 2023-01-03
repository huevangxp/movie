export default function (res) {
    if (res.$cookies.get('token')) {
        res.redirect("/")
    }
}