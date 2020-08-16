Ext.define('Inventori.store.Lislaporankeluar', {
    extend: 'Ext.data.Store',
    storeId: 'lislaporankeluar',
    alias: 'store.lislaporankeluar',
    fields: [
        'nomor', 'jumlah_barang', 'id_barang', 'id_brg_keluar', 'nama_barang', 'nama_kategori', 'jumlah_barang_keluar', 'nama_satuan', 'tgl_keluar', 'nama_jurusan', 'nama_user', 'keterangan'
    ],
    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apilaporan.php?action=1",
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
