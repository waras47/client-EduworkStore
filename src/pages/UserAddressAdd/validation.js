const rules = {

  nama_alamat : {
    required: {value: true, message: "nama alamat tidak boleh kosong"},
    max: {value: 500, message: "panjang nama alamat maksimal 500 karakter"},
    min: {value: 5, message: "panjang minimal nama alamat 5 karakter"}
  },
  provinsi : {
    required: {value: true, message: "nama Provinsi harus dipilih"}
  },
  kabupaten : {
    required: {value: true, message: "nama kabupten harus dipilih"}
  },
  kecamatan : {
    required: {value: true, message: "nama kecamatan harus dipilih"}
  },
  kelurahan : {
    required: {value: true, message: "nama kelurahan harus dipilih"}
  },
  
  detail_alamat : {
    required: {value: true, message: "nama kelurahan harus dipilih"},
    max: {value: 1000, message: "panjang detail  alamat maksimal 1000 karakter"}
  },

}

export {rules};