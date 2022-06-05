const rules = {
  full_name : {
    required: {value: true, message: 'Nama lengkap harus di isi'},
    max : {value: 500, message:'panjang nama lengkap maksimal 500 karakter'}
  },

  email : {
    required: {value: true, message: 'Email harus di isi'},
    max : {value: 255, message:'panjang email lengkap maksimal 255 karakter'},
    pattern : {value: /^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/, message: 'Email tidak valid'}
  },
  password : {
    required: {value: true, message: 'Password harus di isi'},
    max : {value: 255, message:'panjang nama lengkap maksimal 255 karakter'}
  },
  password_confirmation : {
    required: {value: true, message: 'Konfirmasi Password harus di isi'}
  }
}

export {rules}