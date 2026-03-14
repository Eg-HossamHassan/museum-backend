const { translate } = require("@vitalets/google-translate-api");

exports.translateText = async (req, res) => {
  try {

    const { text, language } = req.body;

    const result = await translate(text, { to: language });

    res.json({
      original: text,
      translated: result.text,
      language: language
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};