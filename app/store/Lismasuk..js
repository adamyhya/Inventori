Ext.define('Inventori.store.Lismasuk', {
    extend: 'Ext.data.Store',
    alias: 'store.lismasuk',
    autoLoad: true,
    autoSync: true,
    fields: [
        'nomor', 'id_barang_masuk', 'nama_barang', 'nama_kategori', 'jumlah_barang_masuk', 'nama_satuan', 'tgl_masuk', 'nama_jurusan', 'nama_user', 'keterangan'
    ],


    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apimasuk.php"
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
