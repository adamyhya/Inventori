Ext.define('Inventori.store.Liskeluar', {
    extend: 'Ext.data.Store',
    storeId: 'liskeluar',
    alias: 'store.liskeluar',
    autoLoad: true,
    autoSync: true,
    fields: [
        'nomor', 'jumlah_barang', 'id_barang', 'id_brg_keluar', 'nama_barang', 'nama_kategori', 'jumlah_barang_keluar', 'nama_satuan', 'tgl_keluar', 'nama_jurusan', 'nama_user', 'keterangan'
    ],


    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apikeluar.php?action=1",
            create: "http://localhost/inventaris/apikeluar.php?action=2",
            destroy: "http://localhost/inventaris/apikeluar.php?action=3",
            update: "http://localhost/inventaris/apikeluar.php?action=4",
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
