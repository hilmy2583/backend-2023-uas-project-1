// import Model Patient
const Patient = require("../models/Patient");

// buat class PatientController
class PatientController {
  // buat fungsi index
  async index(req, res) {
    // memanggil method static all dengan async await
    const patients = await Patient.all();

    if (patients.length > 0) {
      const data = {
        message: "Menampilkan data pasient",
        data: patients,
      };

      return res.status(200).json(data);
    }

    const data = {
      message: "Data pasient kosong",
    };

    return res.status(200).json(data);
  }

  // buat fungsi store 
  async store(req, res) {
    const { name, phone, address, status, in_date_at, out_date_at } = req.body;

    // menambahkan validasi data
    if (!name || !phone || !address || !status || !in_date_at || !out_date_at ) {
      const data = {
        message: "Semua data harus dikirim",
      };

      return res.status(422).json(data);
    }

    // memanggil method static create dengan async await
    const pasient = await Patient.create(req.body);

    const data = {
      message: `Menambahkan data pasient`,
      data: pasient,
    };

    return res.status(201).json(data);
  }

  // buat fungsi update 
  async update(req, res) {
    const { id } = req.params;
    // memanggil method static find dengan async await
    const pasient = await Patient.find(id);

    if (pasient) {
      // memanggil method static update dengan async await
      const pasient = await Patient.update(id, req.body);
      const data = {
        message: `Mengedit data pasient`,
        data: pasient,
      };

      return res.status(200).json(data);
    }

    const data = {
      message: "Pasient tidak ditemukan",
    };

    return res.status(404).json(data);
  }

  // buat fungsi destroy 
  async destroy(req, res) {
    const { id } = req.params;
    // memanggil method static find dengan async await
    const pasient = await Patient.find(id);

    if (pasient) {
      // memanggil method static delete dengan async await
      await Patient.delete(id);
      const data = {
        message: `Menghapus data pasient`,
      };

      return res.status(200).json(data);
    }

    const data = {
      message: "Pasient tidak ditemukan",
    };

    return res.status(404).json(data);
  }

  // buat fungsi show 
  async show(req, res) {
    const { id } = req.params;
    // memanggil method static find dengan async await
    const pasient = await Patient.find(id);

    if (pasient) {
      const data = {
        message: "Menampilkan detail pasient",
        data: pasient,
      };

      return res.status(200).json(data);
    }

    const data = {
      message: "Pasient tidak ditemukan",
    };

    return res.status(404).json(data);
  }

  // buat fungsi search
  async search(req, res) {
    const { name } = req.params;
    // memanggil method static search dengan async await
    const patient = await Patient.search(name);

    if (patient) {
      const data = {
        message: "Menampilkan detail pasient",
        data: patient,
      };

      return res.status(200).json(data);
    }

    const data = {
      message: "Pasient tidak ditemukan",
    };

    return res.status(404).json(data);
  }

  // buat fungsi positive
  async positive(req, res) {
    const status = "positive";
    // memanggil method static findByStatus dengan async await
    const patient = await Patient.findByStatus(status);
    
    // memanggil method static count dengan async await
    const count = await Patient.count(status);

    if (patient) {
      const data = {
        message: `Menampilkan pasient dengan status ${status}`,
        total: count,
        data: patient,
      };

      return res.status(200).json(data);
    }
  }

  // buat fungsi recovered
  async recovered(req, res) {
    const status = "recovered";
    // memanggil method static findByStatus dengan async await
    const patient = await Patient.findByStatus(status);

    // memanggil method static count dengan async await
    const count = await Patient.count(status);

    if (patient) {
      const data = {
        message: `Menampilkan pasient dengan status ${status}`,
        total: count,
        data: patient,
      };

      return res.status(200).json(data);
    }
  }

  // buat fungsi dead
  async dead(req, res) {
    const status = "dead";
    // memanggil method static findByStatus dengan async await
    const patient = await Patient.findByStatus(status);

    // memanggil method static count dengan async await
    const count = await Patient.count(status);

    if (patient) {
      const data = {
        message: `Menampilkan pasient dengan status ${status}`,
        total: count,
        data: patient,
      };

      return res.status(200).json(data);
    }
  }
}

// membuat object PatientController
const object = new PatientController();

// export object PatientController
module.exports = object;
