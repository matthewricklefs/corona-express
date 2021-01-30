const router = require("express").Router();
const axios = require("axios");

//set up basic GET route
//set up Root Route
router.get("/", (req, res) => {
  try {
    axios
      .get(`https://covid19.mathdro.id/api`)
      .then((result) => {
        res.status(200).json(result.data);
      })
      .catch((err) => res.status(500).json({ errors: `${err}` }));
  } catch (err) {
    res.status(400).json({ errors: `${err}` });
  }
});

//set up DAILY route
router.get("/daily/:dateString", (req, res) => {
  try {
    axios
      .get(`https://covid19.mathdro.id/api/daily/${req.params.dateString}`)
      .then((result) => {
        res.status(200).json(result.data);
      })
      .catch((err) => res.status(500).json({ errors: `${err}` }));
  } catch (err) {
    res.status(400).json({ errors: `${err}` });
  }
});

//set up COUNTRIES route
router.get("/countries", (req, res) => {
  try {
    axios
      .get(`https://covid19.mathdro.id/api/countries`)
      .then((result) => {
        res.status(200).json(result.data);
      })
      .catch((err) => res.status(500).json({ errors: `${err}` }));
  } catch (err) {
    res.status(400).json({ errors: `${err}` });
  }
});

//set up COUNTRY route
router.get("/countries/:slug", (req, res) => {
  try {
    axios
      .get(`https://covid19.mathdro.id/api/countries/${req.params.slug}`)
      .then((result) => {
        res.status(200).json(result.data);
      })
      .catch((err) => res.status(500).json({ errors: `${err}` }));
  } catch (err) {
    res.status(400).json({ errors: `${err}` });
  }
});

module.exports = router;
