Ext.define('Inventori.store.Liskeluar', {
    extend: 'Ext.data.Store',
    alias: 'store.liskeluar',
    autoLoad: true,
    autoSync: true,
    fields: [
        'nomor', 'id_barang_keluar', 'nama_barang', 'nama_kategori', 'jumlah_barang_keluar', 'nama_satuan', 'tgl_keluar', 'nama_jurusan', 'nama_user', 'keterangan'
    ],


    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apikeluar.php"
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
