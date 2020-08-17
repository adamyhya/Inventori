Ext.define('Inventori.store.Lislaporanmasuk', {
    extend: 'Ext.data.Store',
    storeId: 'lislaporanmasuk',
    alias: 'store.lislaporanmasuk',
    fields: [
        'nomor', 'jumlah_barang', 'id_barang', 'id_brg_masuk', 'nama_barang', 'nama_kategori', 'jumlah_barang_masuk', 'nama_satuan', 'tgl_masuk', 'nama_jurusan', 'nama_user', 'keterangan'
    ],
    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apilaporan.php?action=4",
            destroy: "http://localhost/inventaris/apilaporan.php?action=7",
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
