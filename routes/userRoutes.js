const express = require("express");
const router = express.Router();
const User = require("../models/User");

// 📌 Read Users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.render("index", { users });
});

// 📌 Show Add User Form
router.get("/add", (req, res) => {
  res.render("add");
});

// 📌 Create User
router.post("/add", async (req, res) => {
  await User.create(req.body);
  res.redirect("/");
});

// 📌 Show Edit User Form
router.get("/edit/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("edit", { user });
});

// 📌 Update User
router.put("/edit/:id", async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
});

// 📌 Delete User
router.delete("/delete/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

module.exports = router;
