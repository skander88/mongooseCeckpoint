const express = require("express");
const { model } = require("mongoose");
const contactSchema = require("../model/contact");
const contactRoutes = express.Router();

//route get all contacts
//http://localhost:4000/contact/getAll
contactRoutes.get("/getAll", async (req, res) => {
  try {
    const contact = await contactSchema.find();
    res.status(200).json({ msg: "you get all the users", contact });
  } catch (err) {
    console.log(err);
    res.send("we got a problem");
  }
});

//route post or add contact
//http://localhost:4000/contact/addContact
contactRoutes.post("/addContact", async (req, res) => {
  try {
    const newcontact = new contactSchema(req.body);
    await newcontact.save();
    res.status(200).json({
      msg: "you added a user",
      contact: newcontact,
    });
  } catch (err) {
    console.log(err);
    res.send("we got a problem");
  }
});

//route update contact
//http://localhost:4000/contact/updateContact/:id
contactRoutes.put("/updateContact/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateduser = await contactSchema.findByIdAndUpdate(id, {
      $set: { ...req.body },
    });
    res.status(200).json({ msg: "you updated your user :", updateduser });
  } catch (err) {
    console.log(err);
    res.send("we got a problem");
  }
});

//route delete contact
//http://localhost:4000/contact/deleteContact/:id
contactRoutes.delete("/deleteContact/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteduser = await contactSchema.findByIdAndDelete(id);
    res.status(200).json({ msg: "you deleted your user :", deleteduser });
  } catch (err) {
    console.log(err);
    res.send("we got a problem");
  }
});

//route get unique contact
//http://localhost:4000/contact/getUnique/:id
contactRoutes.get("/getUnique/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getunique = await contactSchema.findById(id);
    res.status(200).json({ msg: "you got your user :", getunique });
  } catch (err) {
    console.log(err);
    res.send("we got a problem");
  }
});

module.exports = contactRoutes;
