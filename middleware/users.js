module.exports = {
    isLoggedIn: (req, res, next) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(
                token,
                process.env.SECRET_KEY
            );

        } catch (err) {
            return res.status(401).send({
                msg: 'Deine Session ist ungültig'
            });
        }
    }
}