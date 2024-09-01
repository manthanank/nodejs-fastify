const Item = require("../models/itemModel");

exports.createItem = async (req, reply) => {
  try {
    const item = new Item(req.body);
    await item.save();
    reply.code(201).send(item);
  } catch (err) {
    reply.code(400).send({ message: err.message });
  }
};

exports.getItems = async (req, reply) => {
  try {
    const items = await Item.find();
    reply.send(items);
  } catch (err) {
    reply.code(500).send({ message: err.message });
  }
};

exports.getItem = async (req, reply) => {
  try {
    const item = await Item.findById(req.params.id);
    reply.send(item);
  } catch (err) {
    reply.code(404).send({ message: err.message });
  }
};

exports.updateItem = async (req, reply) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    reply.send(item);
  } catch (err) {
    reply.code(400).send({ message: err.message });
  }
};

exports.deleteItem = async (req, reply) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    reply.send({ message: "Item deleted" });
  } catch (err) {
    reply.code(500).send({ message: err.message });
  }
};
