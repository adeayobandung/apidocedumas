define({ "api": [
  {
    "type": "post",
    "url": "/api/dumas",
    "title": "1.Menginsert Data Dumas dan Akun Login SP2HP2",
    "version": "0.1.0",
    "name": "setPengaduanMasyarakat",
    "group": "Pengaduan_Masyarakat",
    "permission": [
      {
        "name": "public"
      }
    ],
    "description": "<p>digunakan mengirim data pengaduan dumas dan membuat akun login sp2hp2.</p>",
    "examples": [
      {
        "title": "Cara penggunaan",
        "content": "https://bidpropam.jambi.polri.go.id/api/dumas",
        "type": "json"
      },
      {
        "title": "Setting Header",
        "content": "Content-type : application/json\nAccept : application/json",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "namaLengkap",
            "description": "<p>nama lengkap pelapor/boleh kosong</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "noHp",
            "description": "<p>nomor hp harus dimulai dari angka 62</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tglKejadian",
            "description": "<p>berisi data tanggal</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tmpKejadian",
            "description": "<p>berisi lokasi kejadian</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "namaPelaku",
            "description": "<p>berisi nama pelaku yang di laporkan</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "namaKorba",
            "description": "<p>berisi nama korban</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "kronologisKejadian",
            "description": "<p>berisi kronologis kejadian</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "persetujuan",
            "description": "<p>harus berisi Y</p>"
          }
        ]
      }
    },
    "filename": "./example.js",
    "groupTitle": "Pengaduan_Masyarakat"
  }
] });