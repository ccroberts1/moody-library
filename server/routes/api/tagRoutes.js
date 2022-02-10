const router = require("express").Router();

const Tag = require("../../models/Tag");

router.get("/", async (req, res) => {
  try {
    const tagData = await Tag.findAll();
    res.json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:tagId", async (req, res) => {
  try {
    const tagData = await Tag.findOne({
      where: {
        id: req.params.tagId,
      },
    });
    res.json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:tagId", async (req, res) => {
  try {
    const updatedTag = await Tag.update(
      {
        name: req.body.name,
      },
      {
        where: {
          id: req.params.tagId,
        },
      }
    );
    res.json(updatedTag);
  } catch (err) {
    res.json(err);
  }
});

router.delete("/:tagId", async (req, res) => {
  try {
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.tagId,
      },
    });
    res.json(deletedTag);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newTag = await Tag.create({
      name: req.body.name,
    });
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
