// import PatientController
const PatientController = require("../controllers/PatientController")

// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello Covid API Express");
});

// Membuat routing patient
// menampilkan semua data
router.get("/patients", PatientController.index);
// menambahkan data
router.post("/patients", PatientController.store);
// mengubah atau mengedit data 
router.put("/patients/:id", PatientController.update);
// menghapus data 
router.delete("/patients/:id", PatientController.destroy);
// menampilkan data tertentu sesuai id 
router.get("/patients/:id", PatientController.show);
// menampilkan data tertentu sesuai nama 
router.get("/patients/search/:name", PatientController.search);
// menampilkan data dengan status positive 
router.get("/patients/status/positive", PatientController.positive);
// menampilkan data dengan status recovered 
router.get("/patients/status/recovered", PatientController.recovered);
// menampilkan data dengan status dead 
router.get("/patients/status/dead", PatientController.dead);

// export router
module.exports = router;
