const comicsController = {}

comicsController.getComics = (req, res) => {
    res.json({ message: "Hola mundo!" });
}

module.exports = comicsController;